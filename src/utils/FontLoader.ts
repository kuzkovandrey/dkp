export class FontLoader {
  static async loadArrayBuffer(path: string): Promise<ArrayBuffer> {
    return fetch(path).then((res) => res.arrayBuffer());
  }
}
