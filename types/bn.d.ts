declare module "bsv" {
  declare interface BnOptions {
    endian?: 'little' | 'big',
    size?: number;
    strict?: boolean;
  }

  declare type BnInit = Bn | number | string;

  declare type ToBufferMethod = (opts?: BnOptions) => Buffer;
  declare type FromBufferMethod = (buf: Buffer, opts?: BnOptions) => this;

  declare class Bn {
    constructor(n: BnInit, base: number, ...rest: any[]);
    fromHex(hex: string, opts?: BnOptions): this;
    toHex(opts?: BnOptions): any;
    toJSON(): string;
    fromJSON(str: string): this;
    fromNumber(n: BnInit): this;
    toNumber(): number;
    fromString(str: string, base: number): this;
    fromBuffer: FromBufferMethod;
    toBuffer: ToBufferMethod;
    toFastBuffer: ToBufferMethod;
    fromFastBuffer: FromBufferMethod;
    /**
     * Signed magnitude buffer. Most significant bit represents sign (0 = positive,
     * 1 = negative).
     */
    fromSm(buf: Buffer, opts?: BnOptions): this;
    toSm(opts?: BnOptions): Buffer;
    /**
     * Produce a Bn from the "bits" value in a blockheader. Analagous to Bitcoin
     * Core's uint256 SetCompact method. bits is assumed to be UInt32.
     */
    fromBits(bits: number, opts?: BnOptions): this;
    /**
     * Convert Bn to the "bits" value in a blockheader. Analagous to Bitcoin
     * Core's uint256 GetCompact method. bits is a UInt32.
     */
    toBits(): number;
    fromScriptNumBuffer(buf: Buffer, fRequireMinimal?: boolean, nMaxNumSize?: number): this;
    toScriptNumBuffer(buf: Buffer): Buffer;
    neg(): Bn;
    add(bn: Bn): Bn;
    sub(bn: Bn): Bn;
    mul(bn: Bn): Bn;
    /**
     * to be used if this is positive.
     */
    mod(bn: Bn): Bn;
    /**
     * to be used if this is negative.
     */
    umod(bn: Bn): Bn;
    invm(bn: Bn): Bn;
    div(bn: Bn): Bn;
    ushln(bits: number): Bn;
    ushrn(bits: number): Bn;
    cmp(bn: Bn): -1 | 0 | 1;
    eq(b: Bn): boolean;
    neq(b: Bn): boolean;
    gt(b: Bn): boolean;
    geq(b: Bn): boolean;
    lt(b: Bn): boolean;
    leq(b: Bn): boolean;
  }
}