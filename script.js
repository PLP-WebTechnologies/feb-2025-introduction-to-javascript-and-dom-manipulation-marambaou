function changeContent() {
    const message = document.getElementById("message");
    message.textContent = "The content and style have changed!";
    message.style.color = "darkblue";
    message.style.fontWeight = "bold";
    message.style.fontSize = "1.2em";
  }
  
  function toggleElement() {
    const container = document.getElementById("element-container");
    const existing = document.getElementById("dynamic-paragraph");
  
    if (existing) {
      existing.remove();
    } else {
      const newElement = document.createElement("p");
      newElement.id = "dynamic-paragraph";
      newElement.textContent = "This element was added with JavaScript!";
      newElement.style.color = "green";
      container.appendChild(newElement);
    }
  }
  