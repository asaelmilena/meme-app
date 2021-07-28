import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const meme = 'Bad-Luck-Brian'
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

  const handleTopText = (value) => {
    setTopText(value)
  }

  const handleBottomText = (value) => {
    setBottomText(value)
  }


  let finalTopText = topText.replace(/ /g, "+")
  let finalBottomText = bottomText.replace(/ /g, "+")

  let memeLink = `http://apimeme.com/meme?meme=${meme}&top=${finalTopText}&bottom=${finalBottomText}`
  return (
    <div className="App">
     
       <h2> 
        Borro espacios del link y agrego boton para que lo abra en otra pestania
      </h2>
      <img src="meme.jpg" /> 

      <form onSubmit={() => {}}>
        <label>
          top Text
          <input type="text" value={topText} onChange={(value) => handleTopText(value.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={() => {}}>
        <label>
          bottom Text
          <input type="text" value={bottomText} onChange={(value) => handleBottomText(value.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form>
        <label>
          link
          <input type="text" value={memeLink} 
          style={{ 
            pointerEvents: 'none' }}/>
        </label>
      </form>
      
        {/*<p> 
            {memeLink}
        </p>*/}

    </div>
  );
}

export default App;
