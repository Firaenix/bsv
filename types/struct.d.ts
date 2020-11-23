declare module "bsv" {
  declare class Struct {
    constructor(obj: any);
    fromObject(obj: any): this;
    fromBr(br: any): void;
    asyncFromBr(br: any): void;
    toBw(bw: any): void;
    asyncToBw(bw: any): void;
    /**
     * It is very often the case that you want to create a bitcoin object from a
     * stream of small buffers rather than from a buffer of the correct length.
     * For instance, if streaming from the network or disk. The genFromBuffers
     * method is a generator which produces an iterator. Use .next(buf) to pass
     * in a small buffer. The iterator will end when it has received enough data
     * to produce the object. In some cases it is able to yield the number of
     * bytes it is expecting, but that is not always known.
     */
    genFromBuffers(): Generator<any, void, any>;
    /**
     * A convenience method used by from the genFromBuffers* generators.
     * Basically lets you expect a certain number of bytes (len) and keeps
     * yielding until you give it enough. It yields the expected amount
     * remaining, and returns an object containing a buffer of the expected
     * length, and, if any, the remainder buffer.
     */
    expect(len: any, startbuf: any): Generator<number, T100, any>;
    /**
     * Convert a buffer into an object, i.e. deserialize the object.
     */
    fromBuffer(buf: any, ...rest: any[]): void;
    asyncFromBuffer(buf: any, ...rest: any[]): void;
    /**
     * The complement of toFastBuffer - see description for toFastBuffer
     */
    fromFastBuffer(buf: any, ...rest: any[]): void | this;
    /**
     * Convert the object into a buffer, i.e. serialize the object. This method
     * may block the main thread.
     */
    toBuffer(...rest: any[]): any;
    asyncToBuffer(...rest: any[]): any;
    /**
     * Sometimes the toBuffer method has cryptography and blocks the main thread,
     * and we need a non-blocking way to serialize an object. That is what
     * toFastBuffer is. Of course it defaults to just using toBuffer if an object
     * hasn't implemented it. If your regular toBuffer method blocks, like with
     * Bip32, then you should implement this method to be non-blocking. This
     * method is used to send objects to the workers. i.e., for converting a
     * Bip32 object to a string, we need to encode it as a buffer in a
     * non-blocking manner with toFastBuffer, send it to a worker, then the
     * worker converts it to a string, which is a blocking operation.
     *
     * It is very common to want to convert a blank object to a zero length
     * buffer, so we can transport a blank object to a worker. So that behavior
     * is included by default.
     */
    toFastBuffer(...rest: any[]): any;
    fromHex(hex: any, ...rest: any[]): void;
    asyncFromHex(hex: any, ...rest: any[]): void;
    fromFastHex(hex: any, ...rest: any[]): void | this;
    toHex(...rest: any[]): any;
    asyncToHex(...rest: any[]): any;
    toFastHex(...rest: any[]): any;
    fromString(str: any, ...rest: any[]): void;
    asyncFromString(str: any, ...rest: any[]): void;
    toString(...rest: any[]): any;
    asyncToString(...rest: any[]): any;
    fromJSON(json: any): void;
    asyncFromJSON(json: any, ...rest: any[]): void;
    toJSON(): T101;
    asyncToJSON(): void;
    clone(): any;
    cloneByBuffer(): any;
    cloneByFastBuffer(): any;
    cloneByHex(): any;
    cloneByString(): any;
    cloneByJSON(): any;
  }
  declare class Script extends Struct {
    constructor(chunks?: any[]);
    fromJSON(json: any): this;
    toJSON(): string;
    fromBuffer(buf: any): this;
    toBuffer(): any;
    fromString(str: any): this;
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