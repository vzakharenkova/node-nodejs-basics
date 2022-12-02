import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const callback = (error, data) => {
    if (error) throw new Error('FS operation failed');

    console.log(data);
  };

  readFile(path.join(__dirname, 'files/fileToRead.txt'), 'utf8', callback);
};

await read();
