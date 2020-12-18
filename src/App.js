import './App.css';
import Main from './components/Main';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";



function App() {
  return (
    <div className="App">


      <Provider store={store} >

        <BrowserRouter>

          <Main />

        </BrowserRouter>


      </Provider>




    </div>
  );
}

export default App;