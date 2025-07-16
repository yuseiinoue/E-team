const userPoint = 100;
const pointExpiry = "2025/05/25";

document.getElementById("point").textContent = `${userPoint}pt`;
document.getElementById("expire").textContent = `ポイントの有効期限は${pointExpiry}\nまでです。`;

function toggleMenu(element) {
    element.classList.toggle("active");
    const submenu = element.nextElementSibling;
    if (submenu.classList.contains("submenu")) {
        submenu.classList.toggle("open");
    }
}