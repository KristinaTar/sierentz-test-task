const parseObject = (object:any): string[][] => {
  const keys: string[][] = [];

  collectKeys(object, 0, keys);

  return keys;
}

const collectKeys = (
  object:any,
  level: number,
  keys: string[][],
) => {
  if (object instanceof Object) {
    if (!keys[level]) {
      keys[level] = [];
    }

    for (const key in object) {
      if (!keys[level].includes(key)) {
        keys[level].push(key);
      }

      collectKeys(
        object[key], 
        level + 1, 
        keys
      );
    }
  }
}

export default parseObject;