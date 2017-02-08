window.onload=function(){
	var master=document.getElementsByClassName('master')[0];
	var aP=master.getElementsByTagName('p');
	for (var i = 0; i <aP.length; i++) {
		aP[i].onclick=function(){
			for (var j = 0; j <aP.length; j++) {
				aP[j].className="";
			}
			this.className="pScare";
		}
	}
}