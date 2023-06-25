
import Onebutton from "./button";

const Board = (props)=>{
   return(
    <>
    <div className="board">
    {
      props.signs.map(
        (item, index)=>{
          return(
            <Onebutton key={index} item={item} idd={index} HandleClick={props.handleClick} />
          )
        }
      )
    }
    </div>
    </>
   )
  }

  export default Board;