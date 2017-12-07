dragElement(document.getElementByID("roundbutton-container"));

function dragElement(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementByID(elmnt.id + "header")) 
  {document.getElementByID(elmnt.id + "header").onmousedown = dragMouseDown;}
  else 
  {elmnt.onmousedown = dragMouseDown;}
  
  function dragMouseDown(e)
  {
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
  function closeDragElement()
  {
    document.onmouseup = null;
    document.onmousemove=null;
  }
}
