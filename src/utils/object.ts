export const deepMerge = (
  target: Record<string, object>,
  source: Record<string, object>,
) => {
  const isPlainObject = (val: object): val is Record<string, object> => {
    if (typeof val !== 'object' || val === null) {
      return false;
    }
    const proto = Object.getPrototypeOf(val);

    return proto === null || proto === Object.prototype;
  };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
        deepMerge(targetValue, sourceValue);
      } else if (sourceValue !== undefined) {
        target[key] = sourceValue;
      }
    }
  }

  return target;
};
