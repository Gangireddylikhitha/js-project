import Child1 from "./Child1";
function App() {
  const name = "shashank";
  let a=[1,2]
  function changeName(){
        console.log("hello console");
        
  }
  return (
    <>
      {/* {name} */}
      <Child1 x={name} y={changeName}/>
    </>
  );
}

export default App;
