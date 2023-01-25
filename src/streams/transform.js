import { Transform, pipeline } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
      callback(
        null,
        chunk.toString().replace('\n', '').split('').reverse().join('') + '\n'
      );
    },
  });

  pipeline(process.stdin, transformStream, process.stdout, (error) => {
    if (error) {
      console.error('Pipeline failed.', error);
    }
  });
};

await transform();
