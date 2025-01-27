import { useState } from "react"
import { useDrag } from "react-dnd"

const Editor = () => {
  const [data, setData] = useState("")
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'testType',
    item: {itemName: "tempItem"},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        setData(`You dropped ${JSON.stringify(item)} into ${JSON.stringify(dropResult)}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div className="w-[100%]">
      <div ref={drag} className="w-10 h-10 bg-black text-white">
        test 
      </div>
      Editor {`${isDragging}`}{data}</div>
  )
}

export default Editor