const PIXEL_VAL = 4; // each pixel is represented by four one-byte values [RGBA]

export function getImageDataFromPixelData(pixelData: Uint16Array): ImageData {
   const side = Math.ceil(Math.sqrt(pixelData.length));
   const imageData = new ImageData(side, side);
   const k = 255 / (Math.max(...pixelData) || 1);
   pixelData.forEach((pixel, i) => {
      const pixelByte = pixel * k;
      const posByte = PIXEL_VAL * i;
      imageData.data[posByte + 3] = 255; // alpha
      imageData.data[posByte + 2] = pixelByte;
      imageData.data[posByte + 1] = pixelByte;
      imageData.data[posByte] = pixelByte;
   });
   return imageData;
}

export function serializeImageData({ data }: ImageData): string {
   const pixelData = [];
   for (let i = 0; i < data.length; i += PIXEL_VAL) {
      pixelData.push(data[i]);
   }
   return JSON.stringify(compressImg(pixelData));
}
export function deserializeImageData(ser: string): ImageData {
   const data = JSON.parse(ser);
   decompressImg(data);
   return getImageDataFromPixelData(<Uint16Array> data);
}

export function compressImg(data: number[], resolution: number = 3): (number | [number, number])[] {
   let start = 0;
   let end = 0;
   const result: (number | [number, number])[] = [];
   const len = data.length;
   while (start < len) {
      end = start + 1;
      while (data[end] === data[start] && end < len) {
         end++;
      }
      if (end - start < resolution) {
         while (start != end) {
            result.push(data[start++]);
         }
         continue;
      }
      result.push([end - start, data[start]]);
      start = end;
   }
   return result;
}

export function decompressImg(data: (number | [number, number])[]): void {
   let i = 0;
   let j = 0;
   while (i < data.length) {
      if (typeof data[i] === 'number') {
         i++;
         continue;
      }
      const count = data[i][0];
      const el = data[i][1];
      while (j < count) {
         data.splice(i, 0, el);
         j++;
      }
      j = 0;
      i = i + count;
      data.splice(i, 1);
   }
}