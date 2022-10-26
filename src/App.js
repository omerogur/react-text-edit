
import { useState } from 'react';
import './App.css';
import ChangeText from './ChangeText';


function App() {
  let message = ["Devs Just Want to Have Fun by Cyndi Lauper",
 
  "I come home in the morning light My mother says, “When you gonna live your life right?” Oh mother dear we’re not the fortunate ones And devs, they wanna have fun Oh devs just want to have fun"," The phone rings in the middle of the night My father yells, What you gonna do with your life? Oh daddy dear, you know you’re still number one But girlsdevs, they wanna have fun Oh devs just want to have","That’s all they really wantSome fun When the working day is done Oh devs, they wanna have fun Oh devs just wanna have fun(devs, they wanna, wanna have fun, devs wanna have)"]
 
  const [selected,setSelected] = useState("")
  const [selectedButtons,setSelectedButtons] = useState("h1")
  const [text,setText] = useState(message)
 
 

 const handleMouseUp =() => {
  //console.log(`Selected text: ${window.getSelection().toString()}`);
  setSelected(window.getSelection().toString())
}
//console.log("selected Text",selected);
//console.log("selected buttton",selectedButtons);
const CustomTag = selectedButtons

const handleClick =(x) => {
   let textFilter = text.filter((item,index) => { return item.includes(selected)})
   let textIndex = text.indexOf(textFilter.toString())
   console.log(textFilter);
   console.log(textIndex);
   setSelectedButtons(x)
   
}
  return (
    <div className="App">
      
        <h1>TEST</h1>
        <ChangeText setSelectedButtons={setSelectedButtons} handleClick={handleClick}/>
         <div onMouseUp={handleMouseUp} >
           {text.map(item => {
            return <CustomTag>{item}</CustomTag>
           })}
           
           
        </div >
          
    </div >
  );
}

export default App;
