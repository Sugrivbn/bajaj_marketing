console.log("In js file")



var btn = document.getElementById("btn");
btn.addEventListener( "click", loadData)

function loadData(){
    console.log("Button clicked")

    const xtp = new XMLHttpRequest();
    xtp.open("GET", "data.json", true)


    xtp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        console.log("In reday ststa")
    }
    xtp.onload = function(){
        if(this.status === 200)
            console.log(this.responseText)
        else
        console.log("Some error")
    }

    xtp.send();
    document.getElementById("btn").innerHTML = xtp.responseText;
    
}