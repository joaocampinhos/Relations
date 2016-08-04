exports.root = 0;

exports.isVersion = (v) => parseInt(v) ? true : false;

exports.pathToRoot = (v) => {
  const vv = parseInt(v);
  return [...Array(vv + 1).keys()].reverse();
};

exports.typeToRoot = (v) => {
  const vv = parseInt(v);
  return new Array(vv).fill(10);
};
