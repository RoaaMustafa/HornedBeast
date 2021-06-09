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
      SelectedBeastContentFromState: '',
      SelectedBeastContentFromState2: '',
      SelectedBeastContentFromState3: '',
      show: false



    };
  }
  // modalShowFunction=()=>{

  // }
  handleClose = () => {
    this.setState({ show: false });
  }

  changingStateDataFunction = (selectedData, selectedData2, selectedData3) => {

    //  let newArr= jsonSDatas.find(element=> element.horns===2)

    this.setState(
      {
        SelectedBeastContentFromState: selectedData,
        SelectedBeastContentFromState2: selectedData2,
        SelectedBeastContentFromState3: selectedData3,
        show: true
      }
    );
    // this.modalShowFunction()


  }




  render() {
    return (
      <>
        <Header />
        <Main hornedDataMain={this.state.hornedData} functionProp={this.changingStateDataFunction} />

        <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState} SelectedBeastContent2={this.state.SelectedBeastContentFromState2} SelectedBeastContent3={this.state.SelectedBeastContentFromState3} modalShowFunction={this.state.show} handleClose={this.handleClose} > </SelectedBeast>
        <Footer />
      </>

    );
  }

}

export default App;
