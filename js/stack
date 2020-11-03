let data = [ 
  {id:1,   n:'x', index:30},
  {id:95,  n:'d', index:31},
  {id:5,   n:'b', index:32},
  {id:91,  n:'b', index:33},
  {id:659, n:'n', index:34},
  {id:23,  n:'m', index:35},
  {id:199, n:'u', index:36},
  {id:195, n:'o', index:37},
  {id:155, n:'e', index:38},
];

let item = data[6];

let newIndex = 0;

let firstIndex = data[0].index;

data = data.filter( i => i.id != item.id);

data.splice(newIndex, 0, item);

data.forEach( item => {
  item.index = firstIndex
  firstIndex += 1
});

console.log(data);
