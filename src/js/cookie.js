const customModal = document.getElementById("custom-modal");
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    const dismissCookiesBtn = document.getElementById("dismissCookies");

    // Check if cookies are accepted
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
      customModal.style.display = "flex";
    }

    // Handle button clicks
    acceptCookiesBtn.addEventListener("click", () => {
      customModal.style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
    });

    dismissCookiesBtn.addEventListener("click", () => {
      customModal.style.display = "none";
    });