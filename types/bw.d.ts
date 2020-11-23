
declare module "bsv" {
  declare class Bw {
    constructor(bufs: Buffer[]);
    fromObject(obj: { bufs: Buffer []}): this;
    getLength(): number;
    toBuffer(): Buffer;
    write(buf: Buffer): this;
    writeReverse(buf: Buffer): this;
    writeUInt8(n: number): this;
    writeInt8(n: number): this;
    writeUInt16BE(n: number): this;
    writeInt16BE(n: number): this;
    writeUInt16LE(n: number): this;
    writeInt16LE(n: number): this;
    writeUInt32BE(n: number): this;
    writeInt32BE(n: number): this;
    writeUInt32LE(n: number): this;
    writeInt32LE(n: number): this;
    writeUInt64BEBn(bn: Bn): this;
    writeUInt64LEBn(bn: Bn): this;
    writeVarIntNum(n: number): this;
    writeVarIntBn(bn: Bn): this;
    static varIntBufNum(n: number): any;
    static varIntBufBn(bn: Bn): any;
  }
}