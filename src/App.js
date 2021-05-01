

import "./styles.css";
//import ReactPlayer from 'react-player';
import imageInSrc from './imageInSrc.jpg';


function App() {
  let YourName = "Amylee";
  return (
 
    <div style= {{ border: "solid 1px black", maxWidth: "100vw"}}> 
    
    <h1 className="red title">{YourName} </h1> <br/>
 

 <img src={imageInSrc} className="App-src"  alt="imageInSrc"/> <br/>

 <img src= './imageInPublic.jpg' className="App-pub"  alt="imageInPublic"></img>
 <br/>
 
<video width="320" height="240" controls>
<iframe width="320" height="240" src="https://www.youtube.com/embed/QIvxCf10fe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen type="video/mp4"></iframe>
</video>

  </div>



      

   
  );
}

export default App;
