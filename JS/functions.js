function sum(){
    console.log("sum")
}
sum()

function total(a,b){
    c=a+b;
    console.log(c)
}

function orderTotal(){
    //arguments=`built in function
    //console.log(arguments)
    var total=0
    for(i of arguments){
        total+=i;

    }
    console.log(total)
}