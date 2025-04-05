document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race.",
        "No matter what anybody tells you, words and ideas can change the world.",
        "O Captain! My Captain!",
        "Carpe Diem. Seize the day, boys. Make your lives extraordinary.",
        "I stand upon my desk to remind myself that we must constantly look at things in a different way."
    ];

    const quoteElement = document.getElementById("random-quote");
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    function handleScroll() {
      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight * 0.85) {
          reveals[i].classList.add("visible");
        }
      }
    }
  
    handleScroll();

    window.addEventListener("scroll", handleScroll);
  });
  
