var gioiTinh;

function retu_nam() {
  gioiTinh = document.querySelector('#nam').id;
}
function retu_nu() {
  gioiTinh = document.querySelector('#nu').id;
}
function ket_qua(a) {
  switch (a) {
    case 1: return 'GẦY'; break;
    case 2: return 'BÌNH THƯỜNG'; break;
    case 3: return 'THỪA CÂN NHẸ'; break;
    case 4: return 'TRÊN LÝ TƯỞNG'; break;
    case 5: return 'BÉO PHÌ'; break;
  }
}

function kiem_tra(ten, chieuCao, canNang, gioiTinh) {
  var bmi = canNang / (chieuCao ** 2);
  if (gioiTinh === 'nam') {
    if (bmi < 20.7)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(1) + ' với điểm bmi là: ' + bmi;
    else if (20.7 < bmi && bmi < 26.4)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(2) + ' với điểm bmi là: ' + bmi;
    else if (26.4 < bmi && bmi < 27.8)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(3) + ' với điểm bmi là: ' + bmi;
    else if (27.8 < bmi && bmi < 31.1)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(4) + ' với điểm bmi là: ' + bmi;
    else if (31.1 < bmi)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(5) + ' với điểm bmi là: ' + bmi;
  }
  else if (gioiTinh === 'nu') {
    if (bmi < 19.1)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(1) + ' với điểm bmi là: ' + bmi;
    else if (19.1 < bmi && bmi < 25.8)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(2) + ' với điểm bmi là: ' + bmi;
    else if (25.8 < bmi && bmi < 27.3)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(3) + ' với điểm bmi là: ' + bmi;
    else if (27.3 < bmi && bmi < 32.3)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(4) + ' với điểm bmi là: ' + bmi;
    else if (32.3 < bmi)
      return document.querySelector('.ket_qua').innerHTML = 'Bạn: ' + ten + " có tình trạng " + ket_qua(5) + ' với điểm bmi là: ' + bmi;
  }

}

