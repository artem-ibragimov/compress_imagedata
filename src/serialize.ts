import { compress, decompress } from './compress';

export function serializeImageData({ data }: ImageData): string {
   return JSON.stringify(compress(Array.from(data)));
}

export function deserialize(ser: string): ImageData {
   const data = JSON.parse(ser);
   decompress(data);
   const side = Math.ceil(Math.sqrt(data.length));
   return new ImageData(data, side);
}

interface ImageData {
   data: Uint8ClampedArray;
}