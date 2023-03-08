addEventListener('DOMContentLoaded', (event) => {
  console.log('The DOM is fully loaded.');
});

addEventListener('load', (event) => {
  console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
  // Hiển thị hộp thoại xác nhận
  event.preventDefault();
  // Google Chrome yêu cầu đặt giá trị cho returnValue.
  event.returnValue = '';
});

addEventListener('unload', (event) => {
  // Xử lý sự kiện
});