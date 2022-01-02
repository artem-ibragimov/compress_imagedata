export declare function serializeImageData({ data }: ImageData): string;
export declare function deserialize(ser: string): ImageData;
interface ImageData {
    data: Uint8ClampedArray;
}
export {};
