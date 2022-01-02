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
export function compress(data, resolution) {
    if (resolution === void 0) { resolution = 3; }
    var start = 0;
    var end = 0;
    var result = [];
    var len = data.length;
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
export function decompress(data) {
    var i = 0;
    var j = 0;
    while (i < data.length) {
        if (typeof data[i] === 'number') {
            i++;
            continue;
        }
        var count = data[i][0];
        var el = data[i][1];
        while (j < count) {
            data.splice(i, 0, el);
            j++;
        }
        j = 0;
        i = i + count;
        data.splice(i, 1);
    }
}
//# sourceMappingURL=compress.js.map