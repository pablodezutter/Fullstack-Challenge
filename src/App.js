
import React from 'react';
import './App.css';
import NavigaBar from './components/NavigaBar/NavigaBar';
import JumbotronSimon from './components/Jumbotron/Jumbotron';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CommonPost from "./components/CommonPost";

function App() {
  return (
    <div className="App">
      <JumbotronSimon/>
      <NavigaBar/>
      <Main/>
      <CommonPost />
      <Footer/>
    </div>
  );
}

export default App;
