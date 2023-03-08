var soLieu_4, soLieu_5, soLieu_6;
function kiem_tra(soLieu_1, soLieu_2, soLieu_3){
  soLieu_4 = Math.round((soLieu_1/30/12) + (soLieu_1*(soLieu_2/100))/12);// so tien phai tra hang thang
  soLieu_5 = soLieu_4 *12*30;//tong so tien phai tra
  soLieu_6 = Math.round(soLieu_1 * (soLieu_2/100) *30);// tong so lai
document.querySelector('#soLieu4').value= soLieu_4;
document.querySelector('#soLieu5').value= soLieu_5;
document.querySelector('#soLieu6').value= soLieu_6;
}
a = document.querySelector('#solieu4')
console.log([a])