export function range(start, end, step = 1) {
  const ret = [];

  for (let i = start; i < end; i += step) {
    ret.push(i);
  }

  return ret;
}

export function and(list) {
  return list.reduce((prev, cur) => prev && cur, true);
}

export function or(list) {
  return list.reduce((prev, cur) => prev || cur, false);
}

export function any(predicate, list) {
  for (let i = 0, len = list.length; i < len; i += 1) {
    if (predicate(list[i])) return true;
  }
  return false;
}
