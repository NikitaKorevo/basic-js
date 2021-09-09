import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arr = [];
  
  for (let i = 0; i < names.length; i++) {
    arr.push([]);
    arr[i][0] = names[i];
    arr[i][1] = '0';
  }

  const renameFiles = () => {
    let copyArrForDelete = JSON.parse(JSON.stringify(arr));
    
    for (let i = 0; i < arr.length; i++) {
      let index = 0;
      
      for (let j = i; j < copyArrForDelete.length; j++) {
        if (arr[i][0] === copyArrForDelete[j][0] && i !== j) {
          index++;
          arr[j][1] = index;
          copyArrForDelete[j][0] = '';
        }
        
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] > 0) {
        arr[i][0] = arr[i][0] + '(' + arr[i][1] + ')';
        arr[i][1] = '0';
      }
    }
    AreThereSameNames();
  }

  const AreThereSameNames = () => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][0] === arr[j][0] && i !== j) {
          renameFiles();
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].splice(1, 1);
    }
  }
  AreThereSameNames();

  return arr.flat();
}
