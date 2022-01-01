# Compress / Decompress lib

## Examples

### Example: Compress-decompress array of numbers

```ts
   import { compress, decompress } from 'compress_imagedata/compress';
   
   const data = compress([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]);// data is [[10,2],[5, 5]];
   // ...
   decompress(data); // data is [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5];
```

### Example: Serailize-deserialize ImageData

```ts
   import { compress, decompress } from 'compress_imagedata/compress';
   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');
   const imageData = ctx.createImageData(100, 100);
   //...
   const serialized = JSON.stringify(compress(Array.from(imageData.data)));
   //...
   const data = JSON.parse(serialized);
   decompress(data);
   const side = Math.ceil(Math.sqrt(data.length));
   return new ImageData(data, side);
```
