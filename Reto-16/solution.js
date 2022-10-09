const decodeNumbers = (symbols) => {
  const symbolValues = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }
  return [...symbols]
    .map(symbol => symbolValues[symbol] || NaN)
    .reduce((prev, cur, i, arr) => {
      return arr[i] < arr[i + 1] ? prev -= cur : prev += cur 
  } ,0)
}