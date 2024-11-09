const liItems = document.querySelectorAll('.liThietke3D');
const itemImages = [
    './Images/./ImageThietKe3D/layout-can-1pn-fpt-plaza.jpg',
    './Images/./ImageThietKe3D/e-x.10-layout-can-1pn-fpt-plaza-3-3934.jpg',
    './Images/./ImageThietKe3D/e-12b.14-layout-can-ho-2pn-fpt-plaza-3-2345.jpg',
    './Images/./ImageThietKe3D/w-x.08-layout-can-2pn-fpt-plaza-3-1220.jpg',
    './Images/./ImageThietKe3D/e-x.17-layout-can-2pn-fpt-plaza-3-abc-6344.jpg',
    './Images/./ImageThietKe3D/e-x.04-layout-can-2pn-fpt-plaza-3-abc-1220.jpg',
    './Images/./ImageThietKe3D/e-x.12a-layout-can-2pn-fpt-plaza-3-0431.jpg',
    './Images/./ImageThietKe3D/e-x.02-layout-3pn-fpt-plaza-3-1060.jpg',
    './Images/./ImageThietKe3D/e-x.01-layout-can-3pn-fpt-plaza-3-3030.jpg',
    './Images/./ImageThietKe3D/e-2f.01-concept-can-ho-duplex-thong-tang-fpt-plaza-3-2228.jpg'
];

let currentIndex = 0;
const itemImage = document.querySelector('.ItemImageThietke3D img');

// Đặt hình ảnh đầu tiên
itemImage.src = itemImages[currentIndex];

// Cập nhật link cho ảnh phóng to
const popupLink = document.querySelector('.popup-image');
popupLink.href = itemImages[currentIndex];

// Cập nhật ảnh khi click vào li
liItems.forEach((li, index) => {
    li.addEventListener('click', () => {
        liItems.forEach(item => item.classList.remove('activethietke'));
        li.classList.add('activethietke');
        currentIndex = index;
        itemImage.src = itemImages[currentIndex];
        popupLink.href = itemImages[currentIndex];

        // Kích hoạt lại Magnific Popup
        $.magnificPopup.close(); // Đóng popup nếu mở
        $(popupLink).magnificPopup({
            type: 'image',
            gallery: {
                enabled: true // Cho phép điều hướng qua ảnh
            }
        });
    });
});

// Kích hoạt Magnific Popup cho tất cả ảnh trong gallery
$(document).ready(function() {
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true // Cho phép điều hướng qua ảnh
        }
    });
});
////
const itemImages1 = [
    './Images/./ImageThietKe3D/layout-can-1pn-fpt-plaza.jpg',
    './Images/./ImageThietKe3D/e-x.10-layout-can-1pn-fpt-plaza-3-3934.jpg',
    './Images/./ImageThietKe3D/e-12b.14-layout-can-ho-2pn-fpt-plaza-3-2345.jpg',
    './Images/./ImageThietKe3D/w-x.08-layout-can-2pn-fpt-plaza-3-1220.jpg',
    './Images/./ImageThietKe3D/e-x.17-layout-can-2pn-fpt-plaza-3-abc-6344.jpg',
    './Images/./ImageThietKe3D/e-x.04-layout-can-2pn-fpt-plaza-3-abc-1220.jpg',
    './Images/./ImageThietKe3D/e-x.12a-layout-can-2pn-fpt-plaza-3-0431.jpg',
    './Images/./ImageThietKe3D/e-x.02-layout-3pn-fpt-plaza-3-1060.jpg',
    './Images/./ImageThietKe3D/e-x.01-layout-can-3pn-fpt-plaza-3-3030.jpg',
    './Images/./ImageThietKe3D/e-2f.01-concept-can-ho-duplex-thong-tang-fpt-plaza-3-2228.jpg'
];

let currentIndex1 = 0;
const itemImage1 = document.querySelector('.ItemImageThietke3D img');
const containerItemImageMin = document.querySelector('.ContainerItemImageMin');
const btnLeft1 = document.querySelector('.bleft');
const btnRight1 = document.querySelector('.bright');

// Hiển thị 6 ảnh đầu tiên
for (let i = 0; i < Math.min(6, itemImages1.length); i++) {
    const itemImageMin = document.createElement('div');
    itemImageMin.classList.add('itemImageMin');
    const link = document.createElement('a');
    link.href = itemImages1[i];
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        currentIndex1 = i;
        itemImage1.src = itemImages1[currentIndex1]; // Cập nhật ảnh chính.
        popupLink.href = itemImages1[currentIndex1]; // Cập nhật link cho ảnh lớn
    });
    const img = document.createElement('img');
    img.src = itemImages1[i];
    img.alt = '';
    link.appendChild(img);
    itemImageMin.appendChild(link);
    containerItemImageMin.appendChild(itemImageMin);
}

// Cập nhật ảnh khi click vào nút chuyển
btnLeft1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 - 1 + itemImages1.length) % itemImages1.length;
    updateImagesmin();
});

btnRight1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % itemImages1.length;
    updateImagesmin();
});

// Cập nhật hình ảnh
function updateImagesmin() {
    itemImage1.src = itemImages1[currentIndex1]; // Cập nhật ảnh chính
    popupLink.href = itemImages1[currentIndex1]; // Cập nhật link cho ảnh lớn
}

// Cập nhật item active
function updateActiveItem() {
    const itemImageMins = containerItemImageMin.querySelectorAll('.itemImageMin');
    itemImageMins.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex1);
    });
}
