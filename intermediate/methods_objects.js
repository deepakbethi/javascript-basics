var user={
    name:"deepak",
    age:34,
    gender:"male",
    courseList:[],
    
    

    buycourse:function(coursename)
    {
        this.courseList.push(coursename);

    }

};
var courseList=true;
user.buycourse("html");
console.log(user.courseList);