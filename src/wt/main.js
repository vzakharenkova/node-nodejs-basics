import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const numOfCpus = cpus().length;

const performCalculations = async () => {
  let sourceData = 10;
  const workers = [];

  for (let i = 0; i < numOfCpus; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, './worker.js'), {
          workerData: sourceData,
        });
        worker.on('message', (msg) =>
          resolve({ data: msg, status: 'resolved' })
        );
        worker.on('error', (_error) => reject({ data: null, status: 'error' }));
      })
    );

    sourceData++;
  }

  const result = await Promise.allSettled(workers).then((workersResult) =>
    workersResult.map((res) =>
      res.status === 'fulfilled' ? res.value : res.reason
    )
  );

  console.log(result);
};

await performCalculations();
