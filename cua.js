

function aleat() {
        
     	var cl = Math.floor(Math.random() * ((1001) - 10) + 10);
     	var ay = cl+"px";
     	document.getElementById('cuad').style.left=ay;
     	var cly = Math.floor(Math.random() * ((501) - 90) + 90);
     	var ayt = cly+"px";
     	document.getElementById('cuad').style.top=ayt;
      var clw = Math.floor(Math.random() * ((401) - 50) + 50);
      var ayw = clw+"px";
      document.getElementById('cuad').style.width=ayw;
      document.getElementById('cuad').style.height=ayw;
     console.log(ayw);
        var ho = document.getElementById('con');
        if (clw>=300) {
        sco+=10;
        }
        if (clw>=200 && clw<300) {
        sco+=20;
        }
         if (clw>=100 && clw<200) {
        sco+=30;
        }
         if (clw>0 && clw<100) {
        sco+=50;
        }
        ho.innerHTML=sco;
}



var sco=-10;         
 var c = 20;
  var fg = 0;

  function clickk(){
  sco=0;
   var salu = function (){
    document.getElementById('hos').innerHTML= c;
    if (c==0 && fg==0) {
        ag=prompt("Quiere volver a jugar?. responda si o no");
        if (ag=="si") {
          c=20;
          sco=0;
        }
        else if (ag=="no") {
            clearInterval(a);
            sco=0;
        }
    }
    else{
        c-=1;

    } 
}

a=setInterval(salu,1000);


}