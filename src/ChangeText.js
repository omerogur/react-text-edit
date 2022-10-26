import React from 'react'

const ChangeText = ({setSelectedButtons,handleClick}) => {
    const buttons = [
        {
            text:"h1",  
        },
        {
            text:"h2"
        },
        {
            text:"h3"
        },
        {
            text:"p"
        },
        {
            text:"bold"
        },
        {
            text:"italic"
        },
        {
            text:"strike"
        },
        {
            text:"left"
        },
        {
            text:"center"
        },
        {
            text:"right"
        },
        {
            text:"justify"
        }

        
    ]

  return (
    <div>
          {buttons.map((item,index) => {
           return  <button key={index}  onClick={() =>handleClick(item.text)}>{item.text}</button>
          })}
    </div>
  )
}

export default ChangeText
