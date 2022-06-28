var user=function(firstname,coursecount){
    this.firstname=firstname;
    this.coursecount=coursecount;
    this.getcoursecount=function(){
        console.log(`course count is ${this.coursecount}`);
    };

};
user.prototype.getfirstname=function(){
    console.log(this.firstname);
}
var deepak=new user("deepak",2);
deepak.getfirstname();