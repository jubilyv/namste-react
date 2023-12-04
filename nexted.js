// nexted
{
    /* <div id="parent">
      <div id="child">
          <h1>I am an Indian</h1>
          <h2>I am not an Indian</h2>
      </div>
  </div> */
  }
  // ReactElement(object) => HTML (Browser understands)
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an Indian"),
      React.createElement("h2", {}, "I am not an Indian"),
    ])
  );
  const root = ReactDOM.createRoot(document.getElementById("root")); //create root for our react library. put this element into DOM or browser.Root is the place where all the code is run.
  root.render(parent);