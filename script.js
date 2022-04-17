const calculate=()=>{
     const a =  parseInt(document.getElementById('book1') .value);
     const b =  parseInt(document.getElementById('book2') .value);
     const c =  parseInt(document.getElementById('book3') .value);
     const d =  parseInt(document.getElementById('book4') .value);
     const e =  parseInt(document.getElementById('book5') .value);

     if(a>100 || b>100 || c>100 || d>100 || e>100){
         alert("plz enter the correct marks");
     }
     else{
         const obtained =a+b+c+d+e;
         document.getElementById('obtain').innerHTML=obtained;
         const par=obtained/500*100;
         document.getElementById('par').innerHTML=par;
         if(a>100 && b>40 && c>40 && d>40 && e>40){
            document.getElementById('remark').innerHTML="<span stule='color:green'>pass</span>";

         }
         else{
            document.getElementById('remark').innerHTML="<span stule='color:red'>fail</span>"
         }
         if(par>=80){
            document.getElementById('grade').textContent="A";
         }
         else if (par>=70){
            document.getElementById('grade').textContent="B";
         }
         else if (par>=60){
            document.getElementById('grade').textContent="C";
         }
         else if (par>=50){
            document.getElementById('grade').textContent="D";
         }
         else if (par>=40){
            document.getElementById('grade').textContent="E";
         }
         else{
            
                document.getElementById('remark').textContent="F";
         }
     }
     
}