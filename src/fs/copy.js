import { cp } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'files');
const destination = path.join(__dirname, 'files_copy');

const copy = async () => {
  const callback = (error) => {
    if (error) throw new Error('FS operation failed');
  };

  cp(
    source,
    destination,
    { errorOnExist: true, force: false, recursive: true },
    callback
  );
};

copy();
