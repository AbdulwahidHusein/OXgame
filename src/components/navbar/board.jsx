
import Onebutton from "./button";

const Board = (props)=>{
   return(
    <>
    <div className="board">
    {
      props.signs.map(
        (item, index)=>{
          return(
            <Onebutton item={item} id={index} HandleClick={props.HandleClick} />
          )
        }
      )
    }
    </div>
    </>
   )
  }

  export default Board;