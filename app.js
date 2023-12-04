const heading = React.createElement(
  "h2",
  { id: "heading" }, //attribute
  "Hello world from React"
); //creating h1 tag element using react. This is core element thing.
const root = ReactDOM.createRoot(document.getElementById("root")); //create root for our react library. put this element into DOM or browser.Root is the place where all the code is run.
root.render(heading); //render the h1 heading inside the root


