function range(x,y){
  
    var a = [];s
    if(x < y ){
        
    for(i = x ; i <= y;i++){
        a.push(i)
    } 

 } else if( x > y){

    for(i = x ; i >= y;i--){
        a.push(i)
    }
     
    } if(x == null ,y == null){
            a = [-1]
    }
    return a;  
} 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log('soal no 2 ');
function range2(x,y,z){
  
    var a = [];
    if(x < y ){

    for(i = x ; i <= y;i++){
        
        a.push(i)
        i+=z-1;
        
    } 

 } else if( x > y){

    for(i = x ; i >=  y;i--){
        a.push(i)
        i-=z-1;
        
    }
     
    } if(x == null ,y == null){
            a = [-1]
    }
    return a;  
} 
console.log(range2(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(range2(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(range2(5, 2, 1)) // [5, 4, 3, 2]
console.log(range2(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log('soal no 3');
function sum(x,y,z){
  
    var a = [];
    if(x < y ){

    for(i = x ; i <= y;i++){
        
        a.push(i)
        
        
    } 

 } else if( x > y){

    for(i = x ; i >=  y;i--){
        a.push(i)
        
        
    }
     
    } if(x == null &&  y == null){
            a = [0]
    }
    if(x == 1 ||y == null){
        a =[1]
    }
    var total = 0;
    for(var i in a){
    total = total +a[i];}
    return total;
 } 

 console.log(sum(1,10)) 
 console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0
   

