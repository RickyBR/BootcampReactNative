var deret = 10;
var jumlah = 0;
while(deret > 0) { 
  jumlah += 2;
  deret--; 
  console.log('I love Coding -' + jumlah)
}
 


console.log('');
var deret = 10;
var jumlah = 22;
while(deret > 0) { 
  jumlah -= 2;
  deret--; 
  console.log(jumlah + '- I will become a mobile developer ' )
}
console.log('');

for(var angka = 1; angka <= 20; angka++){
    if(angka % 2 == 0){
        console.log(angka + ' - berkualitas');
    }
    else if(angka % 3 == 0){
        console.log(angka + ' - I love Coding');
    }else{
        console.log(angka + ' - santai')
    }
}
console.log('');
var hasil = '';
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 8; j++) {
            hasil += '#';
        }
        hasil += '\n';
    }
    console.log(hasil);

    console.log('');
var hasil = '';
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= i; j++) {
            hasil += '#';
        }
        hasil += '\n';
    }
    console.log(hasil);
    console.log('');

var hasil = '';
for(var i = 1; i<= 8;i++){
    for(var j = 1; j<=8 ;j++){
        if(j % 2 == 0){
        hasil += ' ';
        }
        else if (i % 2 == 0){
            if(j % 2 == 0){
                hasil += '#';
                } else{
                    hasil += ' ';
                }
        }else{
            hasil += '#';
        }
    }
    hasil += '\n'
}
console.log(hasil);