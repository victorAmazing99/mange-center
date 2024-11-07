package com.victor.common.core.utils.sm3;

import lombok.extern.slf4j.Slf4j;
import org.bouncycastle.util.Arrays;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

/**
 * 国密SM3，消息摘要（MD5）
 *
 * @author Luke
 */
@Slf4j
public class Sm3Utils {

    private static char[] chars = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
    public static final byte[] IV = {0x73, (byte) 0x80, 0x16, 0x6f, 0x49, 0x14, (byte) 0xb2, (byte) 0xb9, 0x17, 0x24, 0x42,
            (byte) 0xd7, (byte) 0xda, (byte) 0x8a, 0x06, 0x00, (byte) 0xa9, 0x6f, 0x30, (byte) 0xbc, (byte) 0x16, 0x31,
            0x38, (byte) 0xaa, (byte) 0xe3, (byte) 0x8d, (byte) 0xee, 0x4d, (byte) 0xb0, (byte) 0xfb, 0x0e, 0x4e};
    private static final Integer TJ_15 = Integer.valueOf("79cc4519", 16);
    private static final Integer TJ_63 = Integer.valueOf("7a879d8a", 16);
    private static final byte[] FirstPadding = {(byte) 0x80};
    private static final byte[] ZeroPadding = {(byte) 0x00};

    private static int T(int j) {
        if (j >= 0 && j <= 15) {
            return TJ_15.intValue();
        } else if (j >= 16 && j <= 63) {
            return TJ_63.intValue();
        } else {
            throw new RuntimeException("data invalid");
        }
    }

    private static Integer FF(Integer x, Integer y, Integer z, int j) {
        if (j >= 0 && j <= 15) {
            return Integer.valueOf(x.intValue() ^ y.intValue() ^ z.intValue());
        } else if (j >= 16 && j <= 63) {
            return Integer.valueOf(
                    (x.intValue() & y.intValue()) | (x.intValue() & z.intValue()) | (y.intValue() & z.intValue()));
        } else {
            throw new RuntimeException("data invalid");
        }
    }

    private static Integer GG(Integer x, Integer y, Integer z, int j) {
        if (j >= 0 && j <= 15) {
            return Integer.valueOf(x.intValue() ^ y.intValue() ^ z.intValue());
        } else if (j >= 16 && j <= 63) {
            return Integer.valueOf((x.intValue() & y.intValue()) | (~x.intValue() & z.intValue()));
        } else {
            throw new RuntimeException("data invalid");
        }
    }

    private static Integer P0(Integer x) {
        return Integer
                .valueOf(x.intValue() ^ Integer.rotateLeft(x.intValue(), 9) ^ Integer.rotateLeft(x.intValue(), 17));
    }

    private static Integer P1(Integer x) {
        return Integer.valueOf(x.intValue() ^ Integer.rotateLeft(x.intValue(), 15) ^ Integer.rotateLeft(x.intValue(), 23));
    }

    private static byte[] padding(byte[] source) throws IOException {
        if (source.length >= 0x2000000000000000L) {
            throw new RuntimeException("src data invalid.");
        }
        long l = source.length * 8;
        long k = 448 - (l + 1) % 512;
        if (k < 0) {
            k = k + 512;
        }
        if (log.isDebugEnabled()) {
            log.debug("k = " + k);
        }
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream();) {
            baos.write(source);
            baos.write(FirstPadding);
            long i = k - 7;
            while (i > 0) {
                baos.write(ZeroPadding);
                i -= 8;
            }
            baos.write(long2bytes(l));
            if (log.isDebugEnabled()) {
                log.debug("paded size = " + baos.size());
            }
            return baos.toByteArray();
        }
    }

    private static byte[] long2bytes(long l) {
        byte[] bytes = new byte[8];
        for (int i = 0; i < 8; i++) {
            bytes[i] = (byte) (l >>> ((7 - i) * 8));
        }
        return bytes;
    }

    public static String encodeSM3(String source) throws IOException {
        byte[] b = encodeSM3(source.getBytes());
        return byteToHexString(b);
    }

    public static byte[] encodeSM3(byte[] source) throws IOException {
        byte[] m1 = padding(source);
        int n = m1.length / (512 / 8);
        if (log.isDebugEnabled()) {
            log.debug("n = " + n);
        }
        byte[] b;
        byte[] vi = IV.clone();
        byte[] vi1 = null;
        for (int i = 0; i < n; i++) {
            b = Arrays.copyOfRange(m1, i * 64, (i + 1) * 64);
            vi1 = CF(vi, b);
            vi = vi1;
        }
        return vi1;
    }

    private static byte[] CF(byte[] vi, byte[] bi) throws IOException {
        int a, b, c, d, e, f, g, h;
        a = toInteger(vi, 0);
        b = toInteger(vi, 1);
        c = toInteger(vi, 2);
        d = toInteger(vi, 3);
        e = toInteger(vi, 4);
        f = toInteger(vi, 5);
        g = toInteger(vi, 6);
        h = toInteger(vi, 7);

        int[] w = new int[68];
        int[] w1 = new int[64];
        for (int i = 0; i < 16; i++) {
            w[i] = toInteger(bi, i);
        }
        for (int j = 16; j < 68; j++) {
            w[j] = P1(w[j - 16] ^ w[j - 9] ^ Integer.rotateLeft(w[j - 3], 15)) ^ Integer.rotateLeft(w[j - 13], 7)
                    ^ w[j - 6];
        }
        for (int j = 0; j < 64; j++) {
            w1[j] = w[j] ^ w[j + 4];
        }
        int ss1, ss2, tt1, tt2;
        for (int j = 0; j < 64; j++) {
            ss1 = Integer.rotateLeft(Integer.rotateLeft(a, 12) + e + Integer.rotateLeft(T(j), j), 7);
            ss2 = ss1 ^ Integer.rotateLeft(a, 12);
            tt1 = FF(a, b, c, j) + d + ss2 + w1[j];
            tt2 = GG(e, f, g, j) + h + ss1 + w[j];
            d = c;
            c = Integer.rotateLeft(b, 9);
            b = a;
            a = tt1;
            h = g;
            g = Integer.rotateLeft(f, 19);
            f = e;
            e = P0(tt2);
        }
        byte[] v = toByteArray(a, b, c, d, e, f, g, h);
        for (int i = 0; i < v.length; i++) {
            v[i] = (byte) (v[i] ^ vi[i]);
        }
        return v;
    }

    private static int toInteger(byte[] source, int index) {
        StringBuilder valueStr = new StringBuilder("");
        for (int i = 0; i < 4; i++) {
            valueStr.append(chars[(byte) ((source[index * 4 + i] & 0xF0) >> 4)]);
            valueStr.append(chars[(byte) (source[index * 4 + i] & 0x0F)]);
        }
        return Long.valueOf(valueStr.toString(), 16).intValue();

    }

    private static byte[] toByteArray(int a, int b, int c, int d, int e, int f, int g, int h) throws IOException {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream(32);) {
            baos.write(toByteArray(a));
            baos.write(toByteArray(b));
            baos.write(toByteArray(c));
            baos.write(toByteArray(d));
            baos.write(toByteArray(e));
            baos.write(toByteArray(f));
            baos.write(toByteArray(g));
            baos.write(toByteArray(h));
            return baos.toByteArray();
        }
    }

    private static byte[] toByteArray(int i) {
        byte[] byteArray = new byte[4];
        byteArray[0] = (byte) (i >>> 24);
        byteArray[1] = (byte) ((i & 0xFFFFFF) >>> 16);
        byteArray[2] = (byte) ((i & 0xFFFF) >>> 8);
        byteArray[3] = (byte) (i & 0xFF);
        return byteArray;
    }

    private static String byteToHexString(byte[] bytes)
    {
        StringBuilder resultHexString = new StringBuilder();
        String tempStr;
        for (byte b: bytes) {
            //这里需要对b与0xff做位与运算，
            //若b为负数，强制转换将高位位扩展，导致错误，
            //故需要高位清零
            tempStr = Integer.toHexString(b & 0xff);
            //若转换后的十六进制数字只有一位，
            //则在前补"0"
            if (tempStr.length() == 1) {
                resultHexString.append(0).append(tempStr);
            } else {
                resultHexString.append(tempStr);
            }
        }
        return resultHexString.toString();
    }

    private Sm3Utils() {
    }
}