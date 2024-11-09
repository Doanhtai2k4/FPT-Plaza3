document.addEventListener('DOMContentLoaded', function() {
  // Kiểm tra xem Fchat có khả dụng không
  if (typeof fchat !== 'undefined') {
      // Khởi tạo Fchat
      fchat.init({
          // Tùy chọn cấu hình cho Fchat nếu cần
      });

      // Hiển thị widget Fchat
      fchat.show();
  }
});
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
  

