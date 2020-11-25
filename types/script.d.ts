declare module "bsv" {
  declare class Script extends Struct {
    constructor(chunks?: any[]);
    fromJSON(json: any): this;
    toJSON(): string;
    fromBuffer(buf: Buffer): this;
    toBuffer(): Buffer;
    fromString(str: string): this;
    toString(): string;
    /**
     * Input the script from the script string format used in bitcoind data tests
     */
    fromBitcoindString(str: any): this;
    /**
     * Output the script to the script string format used in bitcoind data tests.
     */
    toBitcoindString(): string;
    /**
     * Input the script from the script string format used in bitcoind data tests
     */
    fromAsmString(str: any): this;
    /**
     * Output the script to the script string format used in bitcoind data tests.
     */
    toAsmString(): string;
    fromOpReturnData(dataBuf: any): this;
    fromSafeData(dataBuf: any): this;
    fromSafeDataArray(dataBufs: any): this;
    getData(): any;
    /**
     * Turn script into a standard pubKeyHash output script
     */
    fromPubKeyHash(hashBuf: any): this;
    static sortPubKeys(pubKeys: any): any;
    /**
     * Generate a multisig output script from a list of public keys. sort
     * defaults to true. If sort is true, the pubKeys are sorted
     * lexicographically.
     */
    fromPubKeys(m: any, pubKeys: any, sort?: boolean): this;
    removeCodeseparators(): this;
    isPushOnly(): boolean;
    isOpReturn(): boolean;
    isSafeDataOut(): boolean;
    isPubKeyHashOut(): boolean;
    /**
     * A pubKeyHash input should consist of two push operations. The first push
     * operation may be OP_0, which means the signature is missing, which is true
     * for some partially signed (and invalid) transactions.
     */
    isPubKeyHashIn(): boolean;
    isScriptHashOut(): boolean;
    /**
     * Note that these are frequently indistinguishable from pubKeyHashin
     */
    isScriptHashIn(): boolean;
    isMultiSigOut(): boolean;
    isMultiSigIn(): any;
    /**
     * Analagous to bitcoind's FindAndDelete Find and deconste equivalent chunks,
     * typically used with push data chunks.  Note that this will find and deconste
     * not just the same data, but the same data with the same push data op as
     * produced by default. i.e., if a pushdata in a tx does not use the minimal
     * pushdata op, then when you try to remove the data it is pushing, it will not
     * be removed, because they do not use the same pushdata op.
     */
    findAndDelete(script: any): this;
    writeScript(script: any): this;
    writeString(str: any): this;
    writeOpCode(opCodeNum: any): this;
    setChunkOpCode(i: any, opCodeNum: any): this;
    writeBn(bn: any): this;
    writeNumber(number: any): this;
    setChunkBn(i: any, bn: any): this;
    writeBuffer(buf: any): this;
    setChunkBuffer(i: any, buf: any): this;
    checkMinimalPush(i: any): boolean;
  }
}