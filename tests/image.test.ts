import { compressImg, decompressImg } from '../src/image';

describe('compressImg', () => {

   it('compressImg resolution=3 compress [1,2,2,3,3,3,4,4,4,4,5, 5, 5, 5, 5] to [1,2,2,3,3,3,[4,4],[5,5]]', () => {
      expect(compressImg([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 3))
         .toEqual([1, 2, 2, [3, 3,], [4, 4], [5, 5]]);
   });

   it('decompressImg [1,2,2,3,3,3,[4,4],[5,5]] to [1,2,2,3,3,3,4,4,4,4,5, 5, 5, 5, 5]', () => {
      let data: (number | [number, number])[] = [1, 2, 2, 3, 3, 3, [4, 4], [5, 5]];
      decompressImg(data);
      expect(data).toEqual([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
   });
});
