import { compress, decompress, ICompressed } from '../src/compress';

describe('compress', () => {
   it('[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5] -> [[10, 2], [5, 5]]', () => {
      expect(compress([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]))
         .toEqual([[10, 2], [5, 5]]);
   });
});

describe('decompress', () => {
   it('[[10, 2], [5, 5]] -> [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]', () => {
      const data: ICompressed = [[10, 2], [5, 5]];
      decompress(data);
      expect(data).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]);
   });
});
