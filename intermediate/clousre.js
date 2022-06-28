function abc(){
    var name="deepak";
    function def(){
        console.log(name);

    }
    return def;
}
//var ex=abc();  
//ex(); 
console.log(abc()());  //curring

                                 
