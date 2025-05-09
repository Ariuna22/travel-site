import {useState} from "react";
import { data } from "./data";
import './Slider.css';

function Slider(){

  const[person, setPerson] = useState (0);
  const {id, image} = data[person];

  const nextPerson = () =>{
    setPerson((person =>{
      person ++;
      if (person>data.length -1){
        person = 0;
      }
      return person; 
    }))
  }

  const previousPerson = () =>{
    setPerson ((person =>{
      person --;
      if (person<0){
        return data.length-1;
      }
      return person;
    }))
  }

  return(<div className="slider">

    <div className="person">
      <img src = {image} alt="person"/>
      <div className="btn">
      <button onClick={previousPerson}>❮</button>
      <button onClick={nextPerson}>❯</button>

    </div>
    </div>

    
  </div>)

}

export default Slider;