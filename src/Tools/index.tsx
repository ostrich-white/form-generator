import { CSSProperties } from "react"
import { useDrop } from "react-dnd"
const style: CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    background: 'black',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }

const Tools = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'testType',
        drop: () => ({text: "dropText"}),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      }))

  return (
    <div className="w-[100%]">
        Tools
       <div ref={drop} style={{...style}}>
        Drop here <br></br>{`canDrop ${canDrop}`} {`isOver ${isOver}`}
       </div>
    </div>
  )
}

export default Tools