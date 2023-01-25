import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destination = path.join(__dirname, 'files/fileToCompress.txt');
const source = path.join(__dirname, 'files/archive.gz');

const decompress = async () => {
  const gunzip = createGunzip();
  const readable = createReadStream(source);
  const writable = createWriteStream(destination);

  pipeline(readable, gunzip, writable, (error) => {
    if (error) {
      console.error('Pipeline failed.', error);
    }
  });
};

await decompress();
