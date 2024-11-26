let sub=document.getElementById("sub");
let reset=document.getElementById("reset");
let a=[];
let output="";
sub.onclick=function()
{
    let player=document.getElementById("participants").value;
    a.push(player);
    display(a);
    document.getElementById("participants").value="";
}
function display(){
    output=""
    for(let i=0;i<a.length;i++)
    {
        output+=`${i+1}:${a[i]}<br>`;
    }
    document.getElementById("myp").innerHTML=output;
}
reset.onclick=function()
{
    output="";
    a=[];
    document.getElementById("myp").textContent="";
}
document.getElementById("roll").onclick=function()
{
    let max=a.length;
    let value=Math.floor(Math.random()*max)+1;
    document.getElementById("chance").textContent=value;
}