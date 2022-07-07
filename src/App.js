import Props from "./components/Props";
import Props2 from "./components/Props2";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import VisibleComponent from "./components/VisibleComponent";
import VisibleComponent2 from "./components/VisibleComponent2";

function App() {

  const isVisible = false;
  
  return (
    <>
      <Props p="Lorem Ipsum" />
      <Props2 p="Lorem Ipsum 2" />
      <Props2 />
      <hr/>
      <UseState />
      <hr/>
      <UseEffect />
      <UseEffect2 />
      <hr/>
      {isVisible && <VisibleComponent/>}
      <VisibleComponent2 />
    </>
  );
}

export default App
