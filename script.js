// メニューで選択中の項目にアクティブ
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-link");
      links.forEach(link => {
        link.addEventListener("click", function () {
          links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
      });
    });
  });

// メニューの開閉処理
  function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
  }