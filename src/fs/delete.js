import { unlink } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
  const callback = (error) => {
    if (error) throw new Error('FS operation failed');
  };

  unlink(pathToFile, callback);
};

await remove();
