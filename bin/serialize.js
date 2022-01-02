import { compress, decompress } from './compress';
export function serializeImageData(_a) {
    var data = _a.data;
    return JSON.stringify(compress(Array.from(data)));
}
export function deserialize(ser) {
    var data = JSON.parse(ser);
    decompress(data);
    var side = Math.ceil(Math.sqrt(data.length));
    return new ImageData(data, side);
}
//# sourceMappingURL=serialize.js.map