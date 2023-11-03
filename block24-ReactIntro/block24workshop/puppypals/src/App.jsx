
//confused why this isn't working. I feel like I followe all of the septs but
//whe I click on sames nothing happens and none of the css changes anything

//the deployed application link said "access denied" not sure what this means to deploy

import { useState } from 'react'
import { puppyList } from './data'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

    function handleClick(puppyId) {
      // some logic here
      setFeatPupId(puppyId)
    }

    {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}

    return (
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p onClick={handleClick} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
      </div>
    );
  }

export default App
