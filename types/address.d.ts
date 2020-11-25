declare module "bsv" {
}
export interface T100 {
  buf: any;
  remainderbuf: any;
}
export interface T101 {
  [key: string]: any;
}

export interface T102 {
  hashBuf: any;
  versionByteNum: any;
}
declare class Address_1 extends Struct {
  Constants: any;
  constructor(versionByteNum: any, hashBuf: any, constants?: any);
  fromBuffer(buf: any): this;
  fromPubKeyHashBuf(hashBuf: any): this;
  fromPubKey(pubKey: any): this;
  asyncFromPubKey(pubKey: any): Promise<void | this>;
  fromPrivKey(privKey: any): this;
  asyncFromPrivKey(privKey: any): Promise<void | this>;
  fromRandom(): this;
  asyncFromRandom(): Promise<void | this>;
  fromString(str: any): this;
  asyncFromString(str: any): Promise<void | this>;
  static isValid(addrstr: any): boolean;
  toTxOutScript(): Script;
  fromTxInScript(script: any): this;
  fromTxOutScript(script: any): this;
  toBuffer(): any;
  toJSON(): T102;
  fromJSON(json: any): this;
  toString(): any;
  asyncToString(): Promise<any>;
  validate(): this;
}
export const Address: typeof Address_1;
