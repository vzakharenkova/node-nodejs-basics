import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// uncomment line 9 to emit an error

const sendResult = () => {
  //   if (workerData === 10) throw new Error('Error!');

  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
