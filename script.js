const addButton = document.querySelector(".add-button");
const shapesContainer = document.querySelector(".shapes-container");
const shapesForm = document.querySelector("form");

const createShape = () => {
  shape.forEach(() => {
    shapesContainer.innerHTML = "";
    const newShape = document.createElement("div");
    newShape.classList.add("shape");
    newShape.innerText = document.getElementById("text").value;
    newShape.style.width = document.getElementById("size").value;
    newShape.style.height = document.getElementById("size").value;
    newShape.style.lineHeight = document.getElementById("size").value;
    makeCircle.addEventListener("click", (e) => {
      if (e.target.classList.contains("circle-checkbox")) {
        makeCircle.classList.add("circle");
      }
      shapesContainer.append(newShape);
    });
  });
  shapesForm.reset();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createShape();
});

createShape();
