import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// import smCrypto from "sm-crypto";
import {sm2} from 'sm-crypto'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

// const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\n' +
//   'nzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ=='
const publicKey = '04025d84101aa6ba2835995c2e72c0d9f49f382a87ace7e2770a511e1bbe95a40a2800a40bc966b3a51e4d36735e2b5941dd6e10f502f68fbc42a0ba7cec7ab249'

const privateKey = 'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n' +
  '7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKN\n' +
  'PuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gA\n' +
  'kM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWow\n' +
  'cSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99Ecv\n' +
  'DQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthh\n' +
  'YhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3\n' +
  'UP8iWi1Qw0Y='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

export function doDecryptStr(enStr) {
  let msg = enStr;
  if (typeof (enStr) !== "string") {
    msg = JSON.stringify(enStr);
  }
  // console.log('msg',msg);
  // let sm2 = smCrypto.sm2;
  // 1 - C1C3C2；	0 - C1C2C3；	默认为1
  let cipherMode = 1;
  const privateKey1 = "04025d84101aa6ba2835995c2e72c0d9f49f382a87ace7e2770a511e1bbe95a40a2800a40bc966b3a51e4d36735e2b5941dd6e10f502f68fbc42a0ba7cec7ab249";
  // 加密后的密文，需要前去掉04。因为doDecrypt中自行添加了04，后端加密代码也自行添加了04
  // let en = msg.substr(2);
  let en = msg
  // 解密结果
  // console.log(en, 'do333==>', sm2.doEncrypt(en, privateKey1, cipherMode));
  return sm2.doEncrypt(en, privateKey1, cipherMode);
}


