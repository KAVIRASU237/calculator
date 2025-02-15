const display=document.getElementById("display")


function appendToDisplay(value){
    display.value+=value
}

function cleardisplay(){
    display.value=" "
}

function calculate(){

    try{
        display.value=eval(display.value)
    }catch(Error){
        display.value="Error"
    }
}