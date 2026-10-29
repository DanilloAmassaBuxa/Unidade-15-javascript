
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const themeToggle = document.querySelector("#theme-toggle");

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// MENU HAMBÚRGUER

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Fecha o menu depois de clicar em um link.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");

      menuToggle.textContent = "☰";
    });
  });
}

// SAUDAÇÃO DINÂMICA

const greeting = document.querySelector("#greeting");

if (greeting) {
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Bom dia! Seja bem-vindo.";
  } else if (hour < 18) {
    greeting.textContent = "Boa tarde! Seja bem-vindo.";
  } else {
    greeting.textContent = "Boa noite! Seja bem-vindo.";
  }
}

// MODO CLARO E ESCURO

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");

    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Ativar modo escuro" : "Ativar modo claro"
    );

    themeToggle.textContent = isLight ? "☾" : "☼";
  });
}

// ANO AUTOMÁTICO NO RODAPÉ

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// VERIFICAÇÃO DA FOTO DE PERFIL

const profilePhoto = document.querySelector(".profile-photo");

if (profilePhoto) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.alt =
      "Foto não encontrada. Verifique o arquivo assets/foto-perfil.jpg.";

    profilePhoto.classList.add("photo-error");
  });
}

// VALIDAÇÃO DO FORMULÁRIO

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const consent = document.querySelector("#consent").checked;

    if (!name || !email || !message || !consent) {
      formStatus.textContent =
        "Preencha todos os campos e aceite o consentimento primeiro, SEU CEGO.";

      return;
    }

    formStatus.textContent =
      "Validação concluída! O formulário ainda não está conectado a um serviço de envio.";

    // Limpa os campos depois da validação.
    // Nenhum dado é enviado ou armazenado.
    contactForm.reset();
  });
}
