function contact() {
  const phone_num = "0978042208";
  const button = document.getElementById("button");

  // Khóa nút tạm thời để tránh click nhiều lần
  button.disabled = true;

  navigator.clipboard
    .writeText(phone_num)
    .then(() => {
      // Đọc ngôn ngữ từ file html
      const lang = window.appLanguage || "vi";
      const alertMsg =
        lang === "vi"
          ? "Đã sao chép số điện thoại:\n"
          : "Copied phone number:\n";

      alert(alertMsg + phone_num);
      window.location.href = "tel:0978042208";

      setTimeout(() => {
        button.disabled = false;
      }, 2700);
    })
    .catch((err) => {
      console.error("Lỗi khi copy số điện thoại: ", err);
      button.disabled = false;
    });
}
