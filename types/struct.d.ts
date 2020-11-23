declare module "bsv" {
  declare class Struct {
    constructor(obj: any);
    fromObject(obj: any): this;
    fromBr(br: Br): Struct;
    asyncFromBr(br: Br): Promise<Struct>;
    toBw(bw: Bw): this;
    asyncToBw(bw: Bw): this;
    /**
     * It is very often the case that you want to create a bitcoin object from a
     * stream of small buffers rather than from a buffer of the correct length.
     * For instance, if streaming from the network or disk. The genFromBuffers
     * method is a generator which produces an iterator. Use .next(buf) to pass
     * in a small buffer. The iterator will end when it has received enough data
     * to produce the object. In some cases it is able to yield the number of
     * bytes it is expecting, but that is not always known.
     */
    genFromBuffers(): Generator<any, any, any>;
    /**
     * A convenience method used by from the genFromBuffers* generators.
     * Basically lets you expect a certain number of bytes (len) and keeps
     * yielding until you give it enough. It yields the expected amount
     * remaining, and returns an object containing a buffer of the expected
     * length, and, if any, the remainder buffer.
     */
    expect(len: number, startbuf: Buffer): Generator<number, {
      buf: Buffer,
      remainderbuf: Buffer
    }, any>;
    /**
     * Convert a buffer into an object, i.e. deserialize the object.
     */
    fromBuffer(buf: Buffer, ...rest: any[]): this;
    asyncFromBuffer(buf: Buffer, ...rest: any[]): Promise<this>;
    /**
     * The complement of toFastBuffer - see description for toFastBuffer
     */
    fromFastBuffer(buf: Buffer, ...rest: any[]): this;
    /**
     * Convert the object into a buffer, i.e. serialize the object. This method
     * may block the main thread.
     */
    toBuffer(...rest: any[]): Buffer;
    asyncToBuffer(...rest: any[]): Promise<Buffer>;
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
    toFastBuffer(...rest: any[]): Promise<Buffer>;
    fromHex(hex: string, ...rest: any[]): this;
    asyncFromHex(hex: string, ...rest: any[]): Promise<this>;
    fromFastHex(hex: string, ...rest: any[]): this;
    toHex(...rest: any[]): string;
    asyncToHex(...rest: any[]): Promise<string>;
    toFastHex(...rest: any[]): string;
    fromString(str: string, ...rest: any[]): this;
    asyncFromString(str: string, ...rest: any[]): Promise<this>;
    toString(...rest: any[]): string;
    asyncToString(...rest: any[]): Promise<string>;
    fromJSON(json: any): this;
    asyncFromJSON(json: any, ...rest: any[]): Promise<this>;
    toJSON(): any;
    asyncToJSON(): Promise<any>;
    clone(): this;
    cloneByBuffer(): this;
    cloneByFastBuffer(): this;
    cloneByHex(): this;
    cloneByString(): this;
    cloneByJSON(): this;
  }
}