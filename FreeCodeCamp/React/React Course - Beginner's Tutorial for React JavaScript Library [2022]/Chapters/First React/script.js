function CustomComponent() {
  return (
    <div>
      <h2>A Custom Component</h2>
      <p>Text from a custom component.</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Soup</h1>
    <CustomComponent />
  </div>,
  document.getElementById("root")
);

const rootElement = document.getElementById("root");

const h1Element = document.createElement("h1");
h1Element.textContent = "Soup";
h1Element.classList.add("header");

rootElement.append(h1Element);
