//using return ()=>{}
// var result=[2,4,6].every((ele)=>{
//     if(ele%2===0)
//     {
//         return true;
//     }
//     return false;
// })
// console.log(result);

//not using return()=>()
var result=[2,4,6].every((ele)=>(ele%2===0));
console.log(result);


