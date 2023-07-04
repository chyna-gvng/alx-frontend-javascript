export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((i) => {
    if (i && i.startsWith(startString)) result += `${i.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}

// Path: 0x03-ES6_data_manipulation/9-generate_iterator.js