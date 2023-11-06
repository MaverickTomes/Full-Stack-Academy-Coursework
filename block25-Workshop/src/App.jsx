// Write your Color component here
import { useState } from 'react'

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;

};

const App = () => {
    const [selectedColor, setSelectedColor] = useState(" ")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list"><Color color="yellow" setSelectedColor={setSelectedColor}/>
                            <Color color="green" setSelectedColor={setSelectedColor}/>
                            <Color color="blue" setSelectedColor={setSelectedColor}/>
                            <Color color="red" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

// Tons of errors in the console but it works somehow. I would not import properly so I 
//just added it all in this app.jsx

export default App;
