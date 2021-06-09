import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: Data
      , showModel: false
      , selectedBeast: {}
    }
  }
  updateForm = (newHorn) => {
    this.setState({
      Data: newHorn
    })
  }
  selectedUpdate = (title) => {
    let selected = [];
    Data.forEach((beast) => {
      if (beast.title === title) {
        selected = beast;
      }
    })
    this.setState({ showModel: true, selectedBeast: selected })
  }
  handleClose = () => {
    this.setState({ showModel: false })
  }
  render() {
    return (
      <div>
        <Header />
        {/* <UserForm
        listHandle={this.listHandle}
        /> */}
        <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '0.8em', 'justify-content': 'center' }}>
          <Main
            updateForm={this.updateForm}
            Data={this.state.Data}
            selectedUpdate={this.selectedUpdate}
          />
        </div>
        <SelectedBeast
          Data={this.state.selectedBeast}
          show={this.state.showModel}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    )
  }
}
export default App;