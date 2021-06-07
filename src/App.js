// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componant/Header';
import Main from './componant/Main';
import Footer from './componant/Footer';

class App extends React.Component{
  render(){
    return(
     <div>
    <Header/>

    <Main/>

    <Footer/>
</div>
    )
  }
}





export default App;
