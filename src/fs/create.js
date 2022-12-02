import { access, writeFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const callback = (error) => {
    if (error) throw new Error('FS operation failed');
  };

  const pathToFile = path.join(__dirname, 'files/fresh.txt');

  writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' }, callback);
};

await create();
