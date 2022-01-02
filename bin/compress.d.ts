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
export declare function compress(data: number[], resolution?: number): ICompressed;
export declare type ICompressed = (number | [number, number])[];
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
export declare function decompress(data: ICompressed): void;
