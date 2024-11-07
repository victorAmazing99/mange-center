package com.victor.common.core.utils.sm3;


import org.bouncycastle.crypto.digests.SM3Digest;

import java.io.IOException;
import java.security.SecureRandom;

//SM3加密
public class Sm3crypto {


    public static byte[] getSalt() {
        /*
         * 随机生成128位的随机数
         */
        SecureRandom random = new SecureRandom();
        byte bytes1[] = new byte[16];
        random.nextBytes(bytes1);
        return bytes1;
    }

    public static byte[] pwdSaltedHashValue(byte[] bytes1, String passwdString) {

        //sm3加密密码
        try {
            passwdString = Sm3Utils.encodeSM3(passwdString);
        } catch (IOException e) {
            e.printStackTrace();
        }

        /*
         * 加盐：即随机数和口令组合
         */
        byte passwdbyte[] = arraycat(bytes1, passwdString.getBytes());
        //SM3计算
        SM3Digest mdDigest = new SM3Digest();
        mdDigest.update(passwdbyte, 0, passwdbyte.length);
        byte[] result = new byte[mdDigest.getDigestSize()];
        mdDigest.doFinal(result, 0);
        return result;
    }

    /*
     * 拼接buf1和buf2数组
     */
    public static byte[] arraycat(byte[] buf1, byte[] buf2) {

        byte[] bufret = null;
        int len1 = 0;
        int len2 = 0;
        if (buf1 != null)
            len1 = buf1.length;
        if (buf2 != null)
            len2 = buf2.length;
        if (len1 + len2 > 0)
            bufret = new byte[len1 + len2];
        if (len1 > 0)
            System.arraycopy(buf1, 0, bufret, 0, len1);
        if (len2 > 0)
            System.arraycopy(buf2, 0, bufret, len1, len2);
        return bufret;
    }

}