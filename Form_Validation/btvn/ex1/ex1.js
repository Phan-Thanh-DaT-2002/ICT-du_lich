function check(){
  var name = document.getElementById('formGroupExampleInput1').value;
  var email = document.getElementById('formGroupExampleInput2').value;
  var pas = document.getElementById('formGroupExampleInput3').value;
name.trim();
var D = 0;
for (var i = 0; i < name.split(' ').length; i++){
  if (name.split(' ')[i] !==''){
    D++;
  }
}
if(D < 2  || D ===0 ) alert('ban nhap ten chua dung dinh danng');
if(pas.length < 8 || pas.length > 72)alert('ban nhap mat khau chua dung dinh danng');
}