const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
];
 
// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const n = element.id;
//     names.push(n);
// }
// console.log(names);

const names = students.map(s => s.name);
console.log(names);