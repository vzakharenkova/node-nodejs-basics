import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  //   const _childProcess = child_process.fork(
  //     path.join(__dirname, `/files/script.js`),
  //     args.split(' ')
  //   );

  const childProcess = child_process.spawn('node', [
    path.join(__dirname, `/files/script.js`),
    ...args.split(' '),
  ]);

  process.stdin.on('data', (data) => childProcess.stdin.write(data));

  childProcess.stdout.on('data', (data) =>
    console.log(data.toString().replace('\n', ''))
  );
};

spawnChildProcess('--first --second');
