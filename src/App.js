

import "./styles.css";
//import ReactPlayer from 'react-player';
import imageInSrc from './imageInSrc.jpg';
import 'bootstrap/dist/css/bootstrap.css';





function App() {
  let YourName = "AmyLee";
  return (
 
    <div className="App" style= {{ border: "solid 1px black", maxWidth: "100vw"}}> 
    
    <h1 className="red title">{YourName} <span>❤️❤️</span> </h1> <br/>
 

 <img src={imageInSrc} className="App-src"  alt="imageInSrc"/> <br/>

 <img src= './imageInPublic.jpg' className="App-pub"  alt="imageInPublic"></img>
 <br/>
 <video width="320" height="240" controls>

<source src="./video/evan.mp4" type="video/mp4" />
</video>

 
  </div>



      

   
  );
}

export default App;
