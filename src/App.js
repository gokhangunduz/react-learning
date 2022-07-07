import Props from "./components/Props";
import Props2 from "./components/Props2";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
function App() {
  return (
    <>
      <Props p="Lorem Ipsum" />
      <Props2 p="Lorem Ipsum 2" />
      <Props2 />
      <hr/>
      <UseState />
      <UseEffect />
    </>
  );
}

export default App
