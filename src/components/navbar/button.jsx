const Onebutton = (props)=>{
    return (
      <>
      <button onClick={props.HandleClick} id={props.id} className="button">
        {props.item}
      </button>
      </>
    )
  }

  export default Onebutton;