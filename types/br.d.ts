import { Bn } from "../lib/bn";

declare module "bsv" {
  declare class Br {
    constructor(buf: Buffer);
    fromObject(obj: { buf: Buffer, pos: number }): this;
    eof(): boolean;
    read(len?: number): Buffer;
    readReverse(len?: number): Buffer;
    readUInt8(): number;
    readInt8(): number;
    readUInt16BE(): number;
    readInt16BE(): number;
    readUInt16LE(): number;
    readInt16LE(): number;
    readUInt32BE(): number;
    readInt32BE(): number;
    readUInt32LE(): number;
    readInt32LE(): number;
    readUInt64BEBn(): Bn;
    readUInt64LEBn(): Bn;
    readVarIntNum(): number;
    readVarIntBuf(): number;
    readVarIntBn(): Bn;
  }
}