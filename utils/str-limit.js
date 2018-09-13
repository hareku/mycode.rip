export default function (str, length = 50, end = '…') {
  if (str.length <= length) {
    return str
  }

  return str.slice(0, length) + end
}
