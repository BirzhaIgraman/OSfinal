window.state = window.state || {};
state.adminLevels = state.adminLevels || {};

const ROOT_NICK = "Jdjdjd";
const ROOT_LEVEL = 3;

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const secretCode = document.getElementById("secretCode").value.trim();

  // обычная регистрация
  let message = username + " зарегистрирован.";

  // проверка секретного кода
  if (secretCode === "rootadmin") {
    state.adminLevels[username] = ROOT_LEVEL;
    message = username + " зарегистрирован как Root Admin (Lv" + ROOT_LEVEL + ")";
    // открываем скрытые приложения
    document.querySelectorAll(".hidden-app").forEach(el => el.style.display = "");
  }

  document.getElementById("registerOutput").innerText = message;
});