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

      hornedData: jsonSData,
      SelectedBeastHeader: '',
      SelectedBeastBody: '',
      SelectedBeastFooter: '',
      show: false



    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  changingStateDataFunction = (headerData,bodyData,footerData) => {


    this.setState(
      {
        SelectedBeastHeader:headerData,
        SelectedBeastBody:bodyData,
        SelectedBeastFooter:footerData,
        show: true
      }
    );


  }




  render() {
    return (
      <>
        <Header />
        <Main hornedDataMain={this.state.hornedData} getDataFromApp={this.changingStateDataFunction} />

        <SelectedBeast SelectedBeastHeader={this.state.SelectedBeastHeader} SelectedBeastBody={this.state.SelectedBeastBody} SelectedBeastFooter={this.state.SelectedBeastFooter} modalShowFunction={this.state.show} handleClose={this.handleClose} > </SelectedBeast>
        <Footer />
      </>

    );
  }

}

export default App;
