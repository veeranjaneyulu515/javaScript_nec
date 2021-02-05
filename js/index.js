// var container =document.querySelector("#root")
// var card=document.createElement("div");
// card.setAttribute("id","card");
// container.appendChild(card)
// //subchild
// var image=document.createElement("img");
// image.src="images.png"
// image.alt="image"
// image.style.width="32%"
// card.appendChild(image)
var loadJSON=(file,callback)=>{
var ajax=new XMLHttpRequest();
ajax.overrideMimeType("application/json");
ajax.open("GET",file,true);
ajax.onreadystatechange=()=>{
    if(ajax.readyState===4 && ajax.status===200)
    callback(ajax.responseText);
}
ajax.send();
 }
 loadJSON("json_data/data.json",(text)=>{

    var d=JSON.parse(text);
  var details (d.detail);
});
var h= document.createElement("h1");
h.setAttribute("class","name");
h.textContent=cse.name;
root.appendChild(h);


