let n = prompt("nhập số tiền");
let min;
let dem=0;
for(let a=0; a<=n/50; a++){
    if((a*50)==n){
        min =a;
        //console.log(min);
    }else{
        for(let b=0; b<=n/20;b++){
            if(((a*50) +(b*20)) == n){
                min =a +b;
                //console.log(min);
                
            }
            else{
                for(let c=0; c<=n/10; c++){
                    if((a*50 + b*20 + c*10) ==n){
                        min = a+b+c;
                       // console.log(min);
                    }
                    else{
                        for(let d=0; d<=n/1; d++){
                            if((a*50 + b*20 + c*10 + d*1) ==n){
                                min= a+b+c+d;
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

