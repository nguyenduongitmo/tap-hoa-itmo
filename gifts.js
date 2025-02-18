const giftsGrid = document.getElementById('giftsGrid');
const resultDiv = document.getElementById('result');

// Tạo danh sách 120 món quà
for (let i = 1; i <= 120; i++) {
    const giftItem = document.createElement('div');
    giftItem.classList.add('gift-item');
    giftItem.innerHTML = `<img src="images/gift.jpg" alt="Món quà ${i}">`;
    giftItem.addEventListener('click', () => selectGift(i));
    giftsGrid.appendChild(giftItem);
}

// Hàm tạo hiệu ứng tung hoa giấy
function createConfetti() {
    const confettiCount = 200; // Số lượng hoa giấy
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
        confetti.style.animationDelay = `${Math.random()}s`; // Độ trễ ngẫu nhiên
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Màu sắc ngẫu nhiên
        document.body.appendChild(confetti);
    }

    // Xóa hoa giấy sau khi animation kết thúc (để tránh quá tải DOM)
    setTimeout(() => {
        const confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(element => element.remove());
    }, 3000); // Xóa sau 3 giây (thời gian animation)
}


// Xử lý khi chọn quà
function selectGift(giftNumber) {
    resultDiv.textContent = `Chúc mừng! Bạn nhận được món quà số ${giftNumber}`;
    giftsGrid.innerHTML = ''; // Xóa danh sách quà sau khi chọn
    createConfetti(); // Gọi hàm tạo hiệu ứng tung hoa giấy
}