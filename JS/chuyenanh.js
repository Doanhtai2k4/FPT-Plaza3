$(document).ready(function() {
  $('.image-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true, // Cho phép chuyển ảnh trong gallery
      navigateByImgClick: true, // Cho phép chuyển ảnh bằng click vào ảnh
      preload: [0, 1] // Preload ảnh kế tiếp và trước đó
    }
  });
});

// Danh sách ảnh
const imagestienich = [
  './Images/baibiendep.jpg',
  './Images/beboi.jpg',
  './Images/gymvayoga.jpg',
  './Images/sanhcho.png',
  './Images/thuviencongdong.png',
  './Images/khumuasam.png',
  './Images/tienichgiaoduc.jpg',
  './Images/vitrifptplaza3.png',
  './Images/tienichGiaiTri.png'
];

let currentStartIndex = 0;

// Cập nhật ảnh hiển thị
function updateImages() {
  const imageElements = document.querySelectorAll('.itemImage a'); // Lấy thẻ a để cập nhật href
  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].href = imagestienich[(currentStartIndex + i) % imagestienich.length];
    imageElements[i].querySelector('img').src = imagestienich[(currentStartIndex + i) % imagestienich.length];
  }
}

// Sự kiện click cho nút chuyển ảnh
document.querySelector('.btn-right').addEventListener('click', () => {
  currentStartIndex = (currentStartIndex + 1) % imagestienich.length; // Chuyển 1 ảnh mỗi lần
  updateImages();
});

document.querySelector('.btn-left').addEventListener('click', () => {
  currentStartIndex = (currentStartIndex - 1 + imagestienich.length) % imagestienich.length; // Chuyển 1 ảnh mỗi lần
  updateImages();
});

// Khởi động hiển thị ảnh đầu tiên
updateImages();