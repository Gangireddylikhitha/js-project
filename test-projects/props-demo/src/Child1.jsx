


function Child1(props) {
let {x,y}=props
    // props={

    //     x:name,
    //     y:function(),
    // }
  return (
    <>
        <p>Hello Browser...!</p>
        {/* {props.x} */}
        {x}
        {y()}
        {/* <button onClick={y}>click me to execute your function</button> */}
    </>
  )
}

export default Child1