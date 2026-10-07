const toggleSwitch = document.querySelector("#checkbox");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
} else if (prefersDarkScheme.matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

// 2. Nhận diện ngôn ngữ trình duyệt (Tiếng Việt / Tiếng Anh)
const userLang = navigator.language || navigator.userLanguage;
const isVietnamese = userLang.toLowerCase().includes("vi");
window.appLanguage = isVietnamese ? "vi" : "en"; // Lưu biến toàn cục cho contact.js dùng

const dict = {
  vi: {
    bio: "Xin chào! Đây là trang cá nhân của mình. Kết nối với mình qua các nền tảng bên dưới nhé.",
    phone: "Số Điện Thoại",
    footer: "© 2026 Trần Công Thành (CTXL).",
    zaloModal: "Quét mã QR để kết nối",
  },
  en: {
    bio: "Hello! This is my personal page. Connect with me via the platforms below.",
    phone: "Phone Number",
    footer: "© 2026 Tran Cong Thanh (CTXL).",
    zaloModal: "Scan QR code to connect",
  },
};

if (!isVietnamese) {
  document.getElementById("bio-text").innerText = dict.en.bio;
  document.getElementById("phone-text").innerText = dict.en.phone;
  document.getElementById("footer-text").innerText = dict.en.footer;
  document.getElementById("zalo-modal-text").innerText = dict.en.zaloModal;
}

// 3. Xử lý logic Zalo Popup trên Desktop
const zaloBtn = document.getElementById("zalo-btn");
const zaloModal = document.getElementById("zalo-modal");

zaloBtn.addEventListener("click", function (e) {
  // Kiểm tra nếu là Desktop (chiều rộng màn hình > 768px)
  if (window.innerWidth > 768) {
    e.preventDefault(); // Ngăn mở link
    zaloModal.style.display = "flex";
  }
});

function closeZalo() {
  zaloModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == zaloModal) {
    zaloModal.style.display = "none";
  }
};
