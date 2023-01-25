import { readdir } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, 'files');

const list = async () => {
  const callback = (error, files) => {
    if (error) throw new Error('FS operation failed');

    files.forEach((file) => console.log(file));
  };

  readdir(sourceDir, callback);
};

await list();
