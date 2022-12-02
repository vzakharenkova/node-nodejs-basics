import { createHash } from 'node:crypto';
import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const callback = (error, data) => {
    if (error) throw new Error('FS operation failed');

    console.log(createHash('sha256').update(data).digest('hex'));
  };

  readFile(
    path.join(__dirname, 'files/fileToCalculateHashFor.txt'),
    'utf8',
    callback
  );
};

await calculateHash();
