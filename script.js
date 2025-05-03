window.onload = function () {
  let i = 0;
  let C = 0;
  const modal = document.getElementById("modal");
  const modalInput = document.getElementById("modalInput");

  showModal("Welcome to this benevolent website", false);

  setTimeout(() => {
    askPassword();
  }, 1800);

  function askPassword() {
    showModal("Enter the password to this site!", true);
  }

  function showModal(message, showInput) {
    document.getElementById("modalText").innerText = message;
    modalInput.style.display = showInput ? "inline-block" : "none";
    document.getElementById("closeBtn").style.display = showInput ? "none" : "inline-block";
    document.getElementById("customModal").style.display = "flex";
  }

  window.closeModal = () => {
    document.getElementById("customModal").style.display = "none";
  };

  window.handleModalButton = function () {
    const value = Number(modalInput.value);

    if (modalInput.style.display === "none") {
      closeModal();
      return;
    }

    if (modalInput.value.trim() === "") {
      showModal("Enter something, son of a biscuit!", true);
      shakeModal();
      return;
    }

    if (value === 69 || C === 1) {
      showModal("Access granted", false);
      document.querySelector('.confetti-container').style.display = "block";
      setTimeout(() => closeModal(), 1000);
    } else if (isNaN(value)) {
      showModal("Enter a number, flat brained!", true);
    } else if (value < 0) {
      showModal("Only positive integers allowed", true);
    } else {
      i++;
      if (i === 1) showModal("Wrong password", true);
      else if (i === 2) showModal("Wrong password again!", true);
      else if (i === 3) showModal("Dude you're bad!", true);
      else if (i === 4) showModal("Stop trying.", true);
      else if (i === 5) showModal("Your mama's so fat, a singular photo of hers fills my entire disk D:", true);
      else if (i === 51) showModal("Dude! touch some grass.", true);
      else if (i === 52) showModal("Dude! touch some grass, again!", true);
      else if (i === 53) showModal("Can't you just listen to what I say?", true);
      else if (i === 54) {
        showModal("I can't see you having so much pain. Just enter, I guess.", false);
        C++;
      } else showModal(`You failed ${i} times`, true);
      shakeModal();
    }

    modalInput.value = "";
  };

  function shakeModal() {
    const modalBox = document.querySelector(".modal-content");
    modalBox.classList.add("shake");
    setTimeout(() => modalBox.classList.remove("shake"), 300);
  }
  
};
