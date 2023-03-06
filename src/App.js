import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Timer from './Timer';
import Hello from './Hello';





const App = ()=>{
  const [title , setTitle] = useState("it's my timer");
  


  return (
      <>
          <div className="main" >
              <Hello title={title}/>   
              <div className='white'>
                <Timer />
              </div>
          </div>
          
      </>
  ) 
}


export default App;