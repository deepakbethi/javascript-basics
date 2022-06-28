var mymaps=new Map();
mymaps.set(1,"deepak");
mymaps.set(2,"vasanth");
console.log(mymaps);

mymaps.forEach((k,v)=>{console.log(k,v)});  

console.log(mymaps.get(1));