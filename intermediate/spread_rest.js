function add(a,b){
    return a+b;
}
//console.log(add(3,5));
myarr=[6,7];
console.log(add(...myarr));  //spread operator

function addtwo(...args){
    sum=0;
    for (const arg of args) {
        sum=sum+arg;
        
    }
    return sum;
}

console.log(addtwo(3,4,5,8));