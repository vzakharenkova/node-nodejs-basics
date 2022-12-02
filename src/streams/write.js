import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(target);

  process.stdin.on('data', (chunk) => {
    stream.write(chunk.toString());
  });
};

await write();
