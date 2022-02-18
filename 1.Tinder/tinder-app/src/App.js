

import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';


function App() {
  return (
    <div className="app">
    
      {/* header*/}
      
      <Header/>
      {/*Tindercards*/}
      <TinderCards/>

      {/*Swipe buttons */}
      <SwipeButton/>
      
    </div>
  );
}

export default App;
