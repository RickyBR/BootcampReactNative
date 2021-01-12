var nama ="lala"
var role = "witch"

if(nama =='' && role ==''){
console.log("Nama harus diisi");
} else if(role == ''){
    console.log("role harus diisi");
} else if(role =='witch'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + role + " " + nama + " ,kamu dapat melihat siapa yang menjadi werewolf!");
}
else if(role =='guard'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + role + " " + nama + " ,kamu akan membantu melindungi temanmu dari serangan werewolf!");
}
else if(role =='werewolf'){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + role + " " + nama + " ,kamu akan memakan mangsa setiap malam! ");
}

console.log('');

//no 2 
var hari = 24;
var bulan = 11;
var tahun  = 2013;

switch(bulan){
    case 1 : {bulan = ' Januari';break;}
    case 2 : {bulan = ' Februari ';break;}
    case 3 : {bulan = ' Maret ';break;}
    case 4 : {bulan = ' April ';break;}
    case 5 : {bulan = ' Mei ';break;}
    case 6 : {bulan = ' Juni ';break;}
    case 7 : {bulan = ' Juli ';break;}
    case 8 : {bulan = ' Agustus ';break;}
    case 9 : {bulan = ' September ';break;}
    case 10 : {bulan = ' Oktober ';break;}
    case 11 : {bulan = ' November ';break;}
    case 12 : {bulan = ' Desember ';break;}

}
var date = hari + ""+ bulan + ""+ tahun;
console.log(date);

