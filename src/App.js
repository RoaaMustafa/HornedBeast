import React from 'react';
import Header from './componemt/Header';
import Footer from './componemt/Footer';
import Main from './componemt/Main';

class App extends React.Component{

  render(){
    return(
      <div>
       <Header />
       <Main />
       <Footer />
      </div>
    );
  }
}

export default App;