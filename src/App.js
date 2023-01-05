import './App.css';
// import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
// import Home from './Components/Home/Home';
// import {Route, Routes} from 'react-router-dom'
// import CheckOut from './Components/CheckOut/CheckOut';
import { StateProvider, useStateValue } from './Components/StateProvider/StateProvider';
import reducer,{ initialState } from './Components/reducer';
import Route from './Components/Route/Routing';
import { useEffect } from 'react';
import { auth } from './Components/Firebase/firebase';
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
 <div className="App">
      
      <Route />  
    </div>
    </StateProvider>
    );
}

export default App;
