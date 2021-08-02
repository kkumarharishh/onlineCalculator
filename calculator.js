//function for displaying value
function disp(val)
{
    document.getElementById("result").value+=val
}

//function for evaluating result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function for clearing the display
function clr()
{
    document.getElementById("result").value = ""
}