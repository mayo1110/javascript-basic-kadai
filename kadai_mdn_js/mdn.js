const today=new Date();
const [month, day, year] = [
  today.getMonth(today),
  today.getDate(today),
  today.getFullYear(today)
];

console.log(year+'年'+month+'月'+day+'日');