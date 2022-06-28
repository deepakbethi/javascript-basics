var user=function(firstname,coursecount){
    this.firstname=firstname;
    this.coursecount=coursecount;
    this.getcoursecount=function(){
        console.log(`course count is ${this.coursecount}`);
    };

};
var deepak=new user("deepak",2);
console.log(deepak);