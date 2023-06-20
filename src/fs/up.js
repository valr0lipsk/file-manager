function getUpPath(path) {
  const arr = path.split(/\/|\\/);
  arr.pop();
  return arr.join(`\\`);
}

export { getUpPath };
