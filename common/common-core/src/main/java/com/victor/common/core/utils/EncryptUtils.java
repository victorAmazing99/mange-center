package com.victor.common.core.utils;

import cn.hutool.core.util.HexUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.BCUtil;
import cn.hutool.crypto.SmUtil;
import cn.hutool.crypto.asymmetric.KeyType;
import cn.hutool.crypto.asymmetric.SM2;
import cn.hutool.json.JSONUtil;
import com.victor.common.core.exception.GlobalException;
import org.bouncycastle.crypto.engines.SM2Engine;
import org.bouncycastle.crypto.params.ECPrivateKeyParameters;
import org.bouncycastle.crypto.params.ECPublicKeyParameters;
import org.bouncycastle.jcajce.provider.asymmetric.ec.BCECPublicKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.PublicKey;
import java.util.HashMap;
import java.util.Map;

/**
 * 加解密工具类
 *
 * @author gbx
 */
public class EncryptUtils {
    private static final Logger log = LoggerFactory.getLogger(EncryptUtils.class);
    /**
     * 使用SM2加密
     *
     * @param data 密文数据
     * @return 明文数据
     */
    /**
     * SM2加密
     *
     * @return 处理结果
     */
    public static String encrypt2Data(String data, String publicKey) {
        SM2 sm2 = getSM2(null, publicKey);
        return sm2.encryptBcd(data, KeyType.PublicKey);
    }

    /**
     * 使用SM2密钥解密
     *
     * @param data 密文数据
     * @return 密文数据
     */
    public static String decrypt2Data(String data, String privateKey) {
        //创建sm2 对象
        try {
            SM2 sm2 = getSM2(privateKey, null);
            if (!data.startsWith("04")) {
                data = "04" + data;
            }
            return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
        }catch(Exception e){

            log.info(e.getMessage());

                SM2 sm2 = getSM2(privateKey, null);
                data = "04" + data;
                return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
        }

    }

    public static String decrypt2Data2(String data, String privateKey) {
        String args= data;

        //创建sm2 对象
        try {
            SM2 sm2 = getSM2(privateKey, null);
            sm2.setMode(SM2Engine.Mode.C1C2C3);
            if (!data.startsWith("04")) {
                data = "04" + data;
            }
            return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
        }catch(Exception e){
            data =args;
            try {
                SM2 sm2 = getSM2(privateKey, null);
                sm2.setMode(SM2Engine.Mode.C1C2C3);
                data = "04" + data;
                return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
            }catch(Exception e1){
                data =args;
                try {
                    SM2 sm2 = getSM2(privateKey, null);
                    sm2.setMode(SM2Engine.Mode.C1C3C2);
                    if (!data.startsWith("04")) {
                        data = "04" + data;
                    }
                    return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
                }catch(Exception e2){
                    data =args;
                    SM2 sm2 = getSM2(privateKey, null);
                    sm2.setMode(SM2Engine.Mode.C1C3C2);
                    data = "04" + data;
                    return StrUtil.utf8Str(sm2.decryptFromBcd(data, KeyType.PrivateKey));
                }

            }

        }

    }


    /**
     * 获取SM2加密工具对象
     *
     * @param privateKey 加密私钥
     * @param publicKey  加密公钥
     * @return 处理结果
     */
    private static SM2 getSM2(String privateKey, String publicKey) {
        ECPrivateKeyParameters ecPrivateKeyParameters = null;
        ECPublicKeyParameters ecPublicKeyParameters = null;
        if (StringUtils.isNotBlank(privateKey)) {
            ecPrivateKeyParameters = BCUtil.toSm2Params(privateKey);
        }
        if (StringUtils.isNotBlank(publicKey)) {
            if (publicKey.length() == 130) {
                //这里需要去掉开始第一个字节 第一个字节表示标记
                publicKey = publicKey.substring(2);
            }
            String xhex = publicKey.substring(0, 64);
            String yhex = publicKey.substring(64, 128);
            ecPublicKeyParameters = BCUtil.toSm2Params(xhex, yhex);
        }
        //创建sm2 对象
        SM2 sm2 = new SM2(ecPrivateKeyParameters, ecPublicKeyParameters);
        sm2.usePlainEncoding();
        sm2.setMode(SM2Engine.Mode.C1C3C2);
        return sm2;
    }

    /**
     * 生成一对 C1C2C3 格式的SM2密钥
     *
     * @return 处理结果
     */
    public static Map<String, String> getSM2Key() {
        //创建sm2 对象
        Map<String, String> map = new HashMap<>();
        SM2 sm2 = SmUtil.sm2();
        byte[] privateKeyByte = BCUtil.encodeECPrivateKey(sm2.getPrivateKey());
        //这里公钥不压缩  公钥的第一个字节用于表示是否压缩  可以不要
        byte[] publicKeyByte = ((BCECPublicKey) sm2.getPublicKey()).getQ().getEncoded(false);
        try {
            map.put("publicKey", HexUtil.encodeHexStr(publicKeyByte));
            map.put("privateKey", HexUtil.encodeHexStr(privateKeyByte));
        } catch (Exception e) {
            log.error("获取SM2密钥出错", e);
            throw new GlobalException("获取SM2密钥出错");
        }
        return map;
    }

    /**
     * 私钥签名
     * @param privateKey    私钥
     * @param content       待签名内容
     * @return
     */
    public static String sign(String privateKey, String content) {
        //创建sm2 对象
        SM2 sm2 = getSM2(privateKey, null);
        String sign = sm2.signHex(HexUtil.encodeHexStr(content));
        return sign;
    }

    /**
     * 验证签名
     * @param publicKey     公钥
     * @param content       待签名内容
     * @param sign          签名值
     * @return
     */
    public static boolean verify(String publicKey, String content, String sign) {
        ECPublicKeyParameters ecPublicKeyParameters = null;
        //这里需要根据公钥的长度进行加工
        if (publicKey.length() == 130) {
            //这里需要去掉开始第一个字节 第一个字节表示标记
            publicKey = publicKey.substring(2);
            String xhex = publicKey.substring(0, 64);
            String yhex = publicKey.substring(64, 128);
            ecPublicKeyParameters = BCUtil.toSm2Params(xhex, yhex);
        } else {
            PublicKey p = BCUtil.decodeECPoint(publicKey, SmUtil.SM2_CURVE_NAME);
            ecPublicKeyParameters = BCUtil.toParams(p);
        }
        //创建sm2 对象
        SM2 sm2 = new SM2(null, ecPublicKeyParameters);

        boolean verify = sm2.verifyHex(HexUtil.encodeHexStr(content), sign);
        return verify;
    }


    public static void main(String[] args) {
        //System.out.println(verify("049570f66fe45d3c766f6ffa4dff5eed7874d51592853c712fc29efa8287decef6d4c281bc43df73f73e28d4d5df50f82198f158a6d5f6b05711e59d2b6c9c3073", "1221212", "f7e35bcbcb5b4c9c542a8cddfe0b8d88da29dc2df4716bdc150de98813dee8c87cf3e48000dfd1a4f08c1e61cd2a4af82f51dedf41419d9d8160b53e655ff0ad"));

        //System.out.println(sign("632c0541b44ebf70ad3d2c6ea5e3364208502a101f029a2450b4aaafb3088d6f", "1221212"));

        Map<String,String> key = getSM2Key();
        Map map = new HashMap();
        map.put("idCard","310102193601123626");
        //map.put("medicalOrgCode","42508153900");
//        List<Map> lis = new ArrayList<>();
//        lis.add(map);
//        System.out.println("publicKey:"+key.get("publicKey"));
//        System.out.println("privateKey:"+key.get("privateKey"));
        System.out.println("加密：" + encrypt2Data(JSONUtil.toJsonStr(map), "049570f66fe45d3c766f6ffa4dff5eed7874d51592853c712fc29efa8287decef6d4c281bc43df73f73e28d4d5df50f82198f158a6d5f6b05711e59d2b6c9c3073"));
        //String asd ="61511106243141512416121291081411744314311112436149111446151051230946151464159131940158111210491254612315123112920150111411813131054121237713275491371201301131214443141111122209134134111324151314126365151576964331112071315615109815861112612101513781774312139121010152102510138115155";
        String asd="0494360A62F1DC555E1EE342826B8F22AEC16D117CBD1A6C4E3CC6AEF012A79A5825A26C45DB6C7AA5B7EEE4EA5DF4622B5FC6681E9F5B89BC4024E61AB6453548D6B85C214849227843CE492AF775E42D809752DF6C19D9EBEF354DF7E43F724B591F961FCF0AD46D4F57EB48C6475DD2AF803EAAF74E75558E30DC9A3287DC";
        //String asd="081142a5c5541ea01d356d1a6fa54a6ef957edfecdbb3358e415da0cdcec5826f8dde2a8dc624880b183ff0e48d33e2bdc4d9861aa78b62593d645bd96d6f99983daf153c1fd74855ad1c19480455f0f7ba79dd018b162978a3cea2a7078ce4879e6d68337";
        //String asd="80541eb7b9a21fb64baf33ca02ae3b9eff9d5b85dae90a3945722f9b85d719882fe1d525eb71b4290059c6bf203f5438110d11e0c8bb57a1bca485931e8681d8c3c86da0bb090375c52cfafc385d4705a8e8288ff679bed2e630b55eee3a7d23d1f1ecc588";
        //String asd = "mzg0CCB83U6Af8xaz6A0vNALKku7nhlcPBMytYlRPCKymiQOAwGF1VdL1kfZFI9D4SbxGZ26VnSrPuJRr0bzMleEuoyke0TbTw1A11FlWWx5oS3so5eWp6lBWlsduvLayZEYbHM=";
        System.out.println("解密：" + decrypt2Data2(asd, "632c0541b44ebf70ad3d2c6ea5e3364208502a101f029a2450b4aaafb3088d6f"));

    }
}

