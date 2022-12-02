import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'files/fileToCompress.txt');
const destination = path.join(__dirname, 'files/archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const readable = createReadStream(source);
  const writable = createWriteStream(destination);

  pipeline(readable, gzip, writable, (error) => {
    if (error) {
      console.error('Pipeline failed.', error);
    }
  });
};

await compress();
