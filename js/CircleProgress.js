var Contain=document.getElementsByClassName("CircleProgress");

for(var i=0;i<Contain.length;i++){
	var W=parseInt(Contain[i].style.width);
	var cW=W/10;
	var C=W-2*cW;
	Contain[i].style.cssText="width:"+W+"px;height:"+W+"px;position:relative;margin:10px;float:left;";

	var leftContain=document.createElement("div");
	var leftCircle=document.createElement("div");
	leftContain.style.cssText="width:"+W/2+"px;height:"+W+"px;position:absolute;left:0px;overflow:hidden;"
	leftCircle.style.cssText="width:"+C+"px;height:"+C+"px;border:"+cW+"px solid #cff;border-radius:50%;float:left;border-bottom:"+cW+"px solid green;border-left:"+cW+"px solid green;transform:rotate(225deg);";

	var rightContain=document.createElement("div");
	var rightCircle=document.createElement("div");
	rightContain.style.cssText="width:"+W/2+"px;height:"+W+"px;position:absolute;right:0px;overflow:hidden;"
	rightCircle.style.cssText="width:"+C+"px;height:"+C+"px;border:"+cW+"px solid #cff;border-radius:50%;float:right;border-bottom:"+cW+"px solid green;border-left:"+cW+"px solid green;transform:rotate(45deg);"


	leftContain.appendChild(leftCircle);
	rightContain.appendChild(rightCircle);
	Contain[i].appendChild(leftContain);
	Contain[i].appendChild(rightContain);

	var valText=Contain[i].dataset.percent;
	var percentText=document.createElement("div");
	percentText.style.cssText="width:"+W/2+"px;height:auto;text-align:center;position:absolute;left:"+W/4+"px;top:40%;font-size:"+W/8+"px;";
	Contain[i].appendChild(percentText);
}

var n=42,m=0;
var timer=setInterval(function(){
	n++;
	m=m+0.3;
	percentText.innerHTML=Math.floor(m)+"%";
	if(n<=225){
		rightCircle.style.transform="rotate("+n+"deg)";
	}else if(n>225&&n<=405){

		leftCircle.style.transform="rotate("+n+"deg)";
	}
	if(n==405){
		clearInterval(timer);
	}
},10)




