const evenAndOdd = (numbers) => {
  const result = {};
  const evenNumber = numbers.filter(number => number % 2 === 0);
  const oddNumber = numbers.filter(number => number % 2 !== 0);

  result.even = evenNumber;
  result.odd = oddNumber;

  return result;
};

export default evenAndOdd;

