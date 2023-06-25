const Onebutton = (props)=>{
    return (
      <>
      <button onClick={props.HandleClick} id={props.idd} className="button">
        {props.item}
      </button>
      </>
    )
  }

  export default Onebutton;