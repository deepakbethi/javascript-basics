var states=["ts","tn","uv","iu"];
// states.forEach((ele)=>(console.log(ele)));    //for each

// for(var i of states){           // for of    (for array)
//     console.log(i);
// }

var user={                        //for in     (for objects)
    name:"deepak",
    age:34,
    gender:"male"
};
for(ele in user){
    console.log(user[ele]);
}

