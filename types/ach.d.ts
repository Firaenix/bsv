declare module "bsv" {
  export class Ach {
    encrypt: (messageBuf: Buffer, cipherKeyBuf: Buffer, ivBuf: Buffer) => Buffer;
    asyncEncrypt: (messageBuf: Buffer, cipherKeyBuf: Buffer, ivBuf: Buffer) => Promise<Buffer>;
    decrypt: (encBuf: Buffer, cipherKeyBuf: Buffer) => Buffer;
    asyncDecrypt: (encBuf: Buffer, cipherKeyBuf: Buffer) => Promise<Buffer>;
  }
}