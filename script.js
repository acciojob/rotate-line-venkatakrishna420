//your JS code here. If required.
const line=document.getElementById("line");
let angle=2;
	setIntervel(()=>{
		angle+=2
		line.style.transform=`rotate(${angle}deg)`},20)
	
