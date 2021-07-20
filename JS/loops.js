//while
//do while
//for
//for in
//for of
//for each

var i=0
while(i<10){
    console.log(i)
    i++
}
i=0
do{
    console.log(i)
    i++
}while(i>10)

var tools = ["html","css","js","java"]

for(tool of tools){
    console.log(tool)
}

var person = {
    name : "Anuja",
    age : 21
}
for(p in person){
   console.log(person[p]) 
}
