import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
  const stream = createReadStream(source);
  stream.on('data', (chunk) => process.stdout.write(chunk + '\n'));
};

await read();
