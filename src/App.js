import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import ProfileSnippet from './images/ProfileSnippet';
import Tweet from './Components/Tweet';
import faker from "faker"

function App() {
  return (
    <div className="flex items-start w-screen" >
      <div className="st">
        <NavBar.Desktop />
      </div>

      <div className="flex-1 flex h-screen overflow-x-hidden overflow-y-scroll ">
        <div className="flex-1">
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
          <Tweet tweet={faker.lorem.paragraph()} />
        </div>
        <div className="bg-gray-700 flex-1 sticky top-0 hidden lg:block" >
            <p>knjhkjhhs</p>
        </div>
      </div>
      
    </div>
  )
}

export default App;
