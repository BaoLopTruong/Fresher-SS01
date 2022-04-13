let n = prompt("nhập số tiền");
let min;
let min50;
let min20;
let min10;
let min1;
let dem=0;
for(let a=0; a<=n/50; a++){
    if((a*50)==n){
        min =a;
        min50=a;
        //console.log(min);
    }else{
        for(let b=0; b<=n/20;b++){
            if(((a*50) +(b*20)) == n){
                min =a +b;
                min50 =a;
                min20=b;
                //console.log(min);
                
            }
            else{
                for(let c=0; c<=n/10; c++){
                    if((a*50 + b*20 + c*10) ==n){
                        min = a+b+c;
                        min50=a;
                        min20=b;
                        min10=c;
                       // console.log(min);
                    }
                    else{
                        for(let d=0; d<=n/1; d++){
                            if((a*50 + b*20 + c*10 + d*1) ==n){
                                min= a+b+c+d;
                                min50=a;
                                min20=b;
                                min10=c;
                                min1=d;
                               // console.log(min);
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(min);
console.log("50:"+ min50 + " ,20: " + min20 + " ,10: " + min10 + " ,1: " + min1);

