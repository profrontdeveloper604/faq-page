document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const answer = question.nextElementSibling;
    const toggleIcon = question.querySelector(".icon");
    const toggleIconImg = question.querySelector(".icon img");
    question.addEventListener("click", () => {
      answer.classList.toggle("show");
      toggleIconImg.setAttribute(
        "src",
        answer.classList.contains("show")
          ? "images/icon-minus.svg"
          : "images/icon-plus.svg"
      );
    });
    toggleIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      answer.classList.toggle("show");
      toggleIconImg.setAttribute(
        "src",
        answer.classList.contains("show")
          ? "images/icon-minus.svg"
          : "images/icon-plus.svg"
      );
    });
  });
});
