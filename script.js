//your JS code here. If required.
const line=document.getElementById("line");
function rotate(){
	setIntervel(()=>{line.style.transform=rotate(2deg)},20)
	}
rotate