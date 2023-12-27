import { useEffect, useState } from "react";

function App() {

  const items =[
    {id: "Q", source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", key:1, style:"Heater_1"},
    {id: "W", source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", key:2, style:"Heater_2"},
    {id: "E", source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", key:3, style:"Heater_3"},
    {id: "A", source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",key:4, style:"Heater_4"},
    {id: "S", source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",key:5, style:"Clap"},
    {id: "D", source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", key:6, style:"Open-HH"},
    {id: "Z", source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", key:7, style:"Kick_n_hat"},
    {id: "X", source:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", key:8, style:"Kick"},
    {id: "C", source:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", key:9, style:"Closed-HH"},
  ]

  const [text, setText] = useState("Display")

  useEffect(
    () => {

      document.addEventListener("keydown", (e) => {
        if(e.key === "Q" || e.key === "W" || e.key ==="E" || e.key === "A" || e.key === "S" || e.key ==="D" || e.key === "Z" || e.key === "X" || e.key === "C"){
          const sound = document.getElementById(e.key);
        sound.play();
        }
        switch(e.key){
          case "q":
            setText(items[0].style)
            break;
          case "w":
            setText(items[1].style)
            break;
          case "e":
            setText(items[2].style)
            break;
          case "a":
            setText(items[3].style)
            break;
          case "s":
            setText(items[4].style)
            break;
          case "d":
            setText(items[5].style)
            break;
          case "z":
            setText(items[6].style)
            break;
          case "x":
            setText(items[7].style)
            break;
          case "c":
            setText(items[8].style)
            break;
        }
        
      });
    },[]);


  const audioSelector = (x,y) =>{
   const audio = document.getElementById(x)
   audio.play()
    setText(y)
  }


const [newText, setNewText] = useState("")

const vol = document.getElementById("input")

const audio = document.querySelectorAll(".clip")
audio.forEach((item)=>{
  item.volume = vol.value 
})

  return (
    <div id="drum-machine" className="App">
      <div id="display">
      {text} 
      </div>
    <div className="drum-container">
    {items.map((item)=>(
      <div className="drum-pad" id={item.id.toLowerCase()} onClick={()=> audioSelector(item.id, item.style)} key={item.key}>
        {item.id}
        <audio src={item.source} id={item.id} className="clip" ></audio>
         </div>
    ))}
    </div>
    <div className="range">
      {newText}
    <input
      id="input"
      type="range"
      max={1}
      min={0}
      step={.1}
      onChange={(e)=> setNewText(e.target.value)}
    />
    </div>
    </div>
  );
}

export default App;
