import { rename as renameFS, access } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldPath = path.join(__dirname, 'files/wrongFilename.txt');
const newPath = path.join(__dirname, 'files/properFilename.md');

const rename = async () => {
  const callback = (error) => {
    if (error) throw new Error('FS operation failed');
  };

  renameFS(oldPath, newPath, callback);
};

await rename();
