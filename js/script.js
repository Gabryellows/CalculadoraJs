
window.onload = function(){

exibicao=document.getElementById("textoExibicao");

}

par = 0; 
x="0"; 
xi=1; 
soma=0;
ni=0; 
op="no";

function numero(num) {

	if(par ==1){ 

		soma = 0;
		par = 0;
  }
	
         if (x=="0" || xi==1  ) { 
            exibicao.innerHTML=num;
            x=num;
            if (num==".") {
               exibicao.innerHTML="0.";
               x=num; 
               soma=1;
            }
         }

           else { 
               if (num=="." && soma==0) { 
                   exibicao.innerHTML+=num;
                   x+=num;
                   soma=1;  
               }
               else if (num=="." && soma==1) {} 
               else {
                   exibicao.innerHTML+=num;
                   x+=num
               }
            }
            xi=0 
}
		 
function igualar() {
         if (op=="no") { 
            exibicao.innerHTML=x;
          }

         else {
            sl=ni+op+x; 
            sol=eval(sl) 
            exibicao.innerHTML=sol
            x=sol;
            op="no"; 
            xi=1;
          }
}

function operar(oper) {
		 par =1; 
		 igualar(); 
     op=oper; 
		 ni=x 
     xi=1; 
}

function apagarParcial() {
        exibicao.innerHTML=0;
        x=-1;
        soma=0;			

}
function apagarTotal() {
         exibicao.innerHTML=0;
         x="0";
         soma=0;
         ni=0
         op="no"
		     par = 0;

}
