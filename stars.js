let s ='*'
for (i=0 ; i<=6 ; i++){
    console.log(s) ;
    s+='*' ;
}
for (i=6 ; i>=0 ; i--){
    s=s.slice(0,i);
    console.log(s) ;
}

