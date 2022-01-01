/**
 * Return new compressed array of numbers
 * @param {number[]} data array of numbers
 * @param {number} [resolution=3]
 * @returns {ICompressed}
 * @example
 * ```
 *    compress([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5]) -> [[10,2],[5, 5]]
 * ```
 */

export function compress(data: number[], resolution = 3): ICompressed {
   let start = 0;
   let end = 0;
   const result: ICompressed = [];
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

export type ICompressed = (number | [number, number])[];
/**
 * Decompress compressed array of numbers.
 * Mutetes array.
 * @param {ICompressed} data
 * @void
 * @example
 * ```
 *    const data: ICompressed = [[10, 2], [5, 5]];
      decompress(data);
      data -> [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5];
 * ```
 */
export function decompress(data: ICompressed): void {
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