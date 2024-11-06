
});
// const voucherTexts = ['Chỉ từ 1,9 TỶ/CĂN', 'Nhanh Tay Nào !'];
// const voucherColors = {
//     'Chỉ từ 1,9 TỶ/CĂN': '#CCFFFF',  // Màu vàng cho câu "1 chỉ vàng"
//     'Nhanh Tay Nào !': '#FFFFFF'  // Màu xanh nhạt cho câu "1 năm phí QL"
// };
// let currentIndex = 0;

// // Lấy phần tử chứa văn bản
// const voucherTextElement = document.getElementById('voucher-text');

// // Hàm để thêm và xóa các lớp CSS nhằm tạo hiệu ứng phóng to/thu nhỏ
// function triggerScaleAnimation() {
//     // Phóng to chữ
//     voucherTextElement.classList.add('text-scale-up');

//     setTimeout(() => {
//         // Giữ nguyên 1 giây
//         setTimeout(() => {
//             // Phóng to nhẹ
//             voucherTextElement.classList.remove('text-scale-up');
//             voucherTextElement.classList.add('text-scale-down');
//         }, 1000); // Giữ nguyên 1s

//         setTimeout(() => {
//             // Phóng to lại
//             voucherTextElement.classList.remove('text-scale-down');
//             voucherTextElement.classList.add('text-scale-up');
//         }, 1500); // Sau 1.5s, phóng to

//         setTimeout(() => {
//             // Thu nhỏ chữ lại lần cuối, vẫn hiển thị chữ
//             voucherTextElement.classList.remove('text-scale-up');
//             voucherTextElement.classList.add('text-scale-down');
//         }, 2000); // Sau 2s, thu nhỏ
//     }, 500); // Sau 0.5s, phóng to
// }

// // Hàm để hiển thị cụm chữ một cách từ từ
// function displayTextWithEffect(text) {
//     // Đặt lại nội dung văn bản
//     voucherTextElement.textContent = text;
    
//     // Đặt màu sắc cho văn bản
//     voucherTextElement.style.color = voucherColors[text]; // Gán màu cho văn bản

//     // Phóng to chữ lại
//     voucherTextElement.classList.remove('text-scale-down');
//     voucherTextElement.classList.add('text-scale-up');

//     // Thực hiện hiệu ứng phóng to thu nhỏ
//     triggerScaleAnimation();

//     // Sau khi hoàn thành phóng to thu nhỏ, thu nhỏ chữ lại và biến mất
//     setTimeout(() => {
//         // Thay đổi nội dung văn bản thành "|"
//         voucherTextElement.classList.add('text-scale-down');
//         setTimeout(() => {
//             // Sau khi hoàn tất thu nhỏ, hiển thị "|"
//             voucherTextElement.textContent = '|';
//         }, 1000); // Thời gian để thu nhỏ chữ trước khi thay đổi nội dung

//         // Sau đó chuyển sang văn bản tiếp theo
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % voucherTexts.length;
//             displayTextWithEffect(voucherTexts[currentIndex]);
//         }, 1000); // Thời gian chờ trước khi hiển thị lại
//     }, 3500); // Thời gian chờ sau khi hoàn tất phóng to thu nhỏ
// }

// // Bắt đầu chu trình ngay khi tải trang
// displayTextWithEffect(voucherTexts[currentIndex]);

//css form dki tren man hinh
// Lấy modal và nút đóng
var modal = document.getElementById("registration-modal");
var closeButton = document.getElementsByClassName("close-button")[0];

// Hiển thị modal khi trang web được tải
window.onload = function() {
  modal.style.display = "block";
};

// Ẩn modal khi người dùng nhấn nút đóng
closeButton.onclick = function() {
  modal.style.display = "none";
};

// Ẩn modal khi người dùng nhấn bên ngoài modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

    window.addEventListener('scroll', function() {
        const titleSection = document.querySelector('.titlexemchitiet');
        const h2 = titleSection.querySelector('h2');
        const rect = titleSection.getBoundingClientRect();

        // Kiểm tra xem tiêu đề có nằm trong viewport hay không
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            h2.classList.add('active');
        } else {
            h2.classList.remove('active');
        }
        const container = document.querySelector('.containervideofpt');
      const overlayvideofpt = document.querySelector('.overlayvideofpt');
      const rect1 = container.getBoundingClientRect();

      // Kiểm tra xem container có nằm trong viewport hay không
      if (rect1.top <= window.innerHeight && rect1.bottom >= 0) {
        overlayvideofpt.classList.add('active'); // Thêm class khi cuộn vào
      } else {
        overlayvideofpt.classList.remove('active'); // Gỡ bỏ class khi cuộn ra
      }
      const container1 = document.querySelector('.container1');
      const overlay = document.querySelector('.overlay');
      const rect2 = container1.getBoundingClientRect();

      // Kiểm tra xem container có nằm trong viewport hay không
      if (rect2.top <= window.innerHeight && rect2.bottom >= 0) {
          overlay.classList.add('active'); // Thêm class khi cuộn vào
      } else {
          overlay.classList.remove('active'); // Gỡ bỏ class khi cuộn ra
      }
    });
    ///////////////
  
