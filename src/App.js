import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componant/header';
import Main from './componant/main';
import Footer from './componant/footer';

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
