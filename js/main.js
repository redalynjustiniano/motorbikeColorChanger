function changeColor(){
    var setColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("motor").style.backgroundColor = "#" + setColor;
}


function changePri(){
    var select = document.getElementById("option").value;
    if (select == "1")
    {
        document.getElementById("motor").style.backgroundColor = "blue";
    }
    else if (select == "2")
    {
        document.getElementById("motor").style.backgroundColor = "red";
    }
    else if (select == "3")
    {
        document.getElementById("motor").style.backgroundColor = "black";
    }
    else if (select == "4")
    {
        document.getElementById("motor").style.backgroundColor = "yellow";
    }
    else if (select == "5")
    {
        document.getElementById("motor").style.backgroundColor = "pink";
    }
    else if (select == "6")
    {
        document.getElementById("motor").style.backgroundColor = "grey";
    }
    
    
}

function resetColor(){
    document.getElementById("motor").style.backgroundColor = "white";
}