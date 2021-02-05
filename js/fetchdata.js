fetch("json_data/data.json").then(res=>{return res.json})
.then(d=>{
    data(d.details);
    other(r.multipledata)
});
function data(d){
    var root=document.getElementById("root");
    var h= document.createElement("h1");
    h.setAttribute("class","name");
    h.textContent=d.name;
    root.appendChild(h);}
    function data(d){
    var h= document.createElement("h1");
    h.setAttribute("class","name");
    h.textContent=d.mobile;
    root.appendChild(h);
    }
 
function other(r){
    var ul=document.createElement("ul");
    root.appendChild(ul);
    for(let i=0;i<r.length;i++)
    {
         var li=document.createElement("li");
         li.textContent=r[i].name;
         ul.appendChild(li);

    }
}
