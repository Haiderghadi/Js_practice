document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".content-container");

  accordionItems.forEach(function (item) {
    const heading = item.querySelector(".question");
    const content = item.querySelector(".answer");

    heading.addEventListener("click", function () {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
