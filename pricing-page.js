// Show/Hide description
function toggleDescription(element) {
  const description = element.nextElementSibling.nextElementSibling;
  description.style.display =
    description.style.display === "block" ? "none" : "block";
  element.style.color = "#ff6600";
}

// COLOR SWITCHING for PulsX + Pulse Pro
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "PulsX",
      images: {
        pink: "images/PulsX-pink.png",
        blue: "images/PulsX-blue.png",
        green: "images/PulsX-green.png",
        purple: "images/PulsX-purple.png",
      },
    },
    {
      name: "PulsePro",
      images: {
        blue: "images/pulse-pro-blue.png",
        green: "images/pulse-pro-green.png",
        pink: "images/pulse-pro-pink.png",
        purple: "images/pulse-pro-purple.png",
      },
    },
  ];

  products.forEach((product) => {
    const container = document.querySelector(
      `.product[data-product="${product.name}"]`
    );

    if (!container) return;

    const img = container.querySelector("img");
    const colorButtons = container.querySelectorAll(".color-btn");

    colorButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const color = btn.dataset.color;

        // update image
        img.src = product.images[color];

        // highlight selected button
        colorButtons.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  });
});
