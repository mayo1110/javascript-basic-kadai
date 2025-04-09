const today=new Date();
const [year, month, day] = [
  today.getFullYear(today),
  today.getMonth(today)+1,
  today.getDate(today)
];

console.log(year+'年'+month+'月'+day+'日');