import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import jsonSData from './component/data.json';
import SelectedBeast from './component/SelectedBeast';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: jsonSData,
      show: false,
      details: {}
    };
  }


  viewBeast = (card) => {

    this.setState(
      {
        show: true,
        details: card
      });

  }

  close = () => {
    this.setState({
      show: false,
      details: {}
    });
  }


  render() {
    return (
      <div>
        <Header />
        <SelectedBeast show={this.state.show} close={this.close} details={this.state.details} />
        <Main data={this.state.data} viewBeast={this.viewBeast} />
        <Footer />
      </div>
    );

  }
}


export default App;
