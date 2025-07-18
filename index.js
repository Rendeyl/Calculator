const current = document.getElementById("text");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (button.id === "clear") {
      current.style.color = "red";
      current.textContent = "Cleared";

        setTimeout(() => {
            current.textContent = "";
            current.style.color = "black";
        }, 500);

    } else if (button.id === "equals") {
      try {
        current.textContent = eval(current.textContent);
      } catch {
        current.style.color = "red";
        current.textContent = "Error";

        setTimeout(() => {
            current.textContent = "";
            current.style.color = "black";
        }, 500);

      }
    } else if (value) {
      current.textContent += value;
    }
  });
});

//theme soon