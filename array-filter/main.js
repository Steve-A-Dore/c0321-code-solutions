const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const overFive = numbers.filter(workingNumber => workingNumber > 5);
const startsWithE = names.filter(name => name[0].toLowerCase() === 'e');
const haveD = names.filter(checkForD);
console.log(haveD);

function checkForD(name) {
  const nameD = name.toLowerCase().split('');
  if (nameD.includes('d')) {
    return nameD.join();
  }
}
