
// buat variabel untuk  angka random 
const  angkaRandom = Math.floor(Math.random() * 100);

const input = document.getElementById('inputan');

const pesan = document.getElementById('pesan');

let percobaan = 0;
function periksaInputan() { 

    percobaan++;

    const inputanUser = parseInt(input.value);
    if(inputanUser === angkaRandom){
        pesan.textContent = "selamat anda berhasil menebak angka";
        pesan.style.color = "green"
    }else if(inputanUser < angkaRandom){
        pesan.textContent = "tebakan anda terlalu kecil, Coba Lagi";
        pesan.style.color = "red"
    }else if( inputanUser > angkaRandom){
        pesan.textContent = "tebakan anda terlalu Tinggi, Coba Lagi"
        pesan.style.color = "blue"
    }else{
        pesan.textContent = "tebakan anda salah"
        pesan.style.color = "black"
    }

    input.value = '';
    input.focus();
 }