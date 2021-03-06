import ArrayCallback from '../types/ArrayCallback';

const forEachRight = <T>(arr: T[], callback: ArrayCallback<T>) => {
  for (let i = arr.length - 1; i >= 0; i--) callback(arr[i], i, arr)
}

export default forEachRight;