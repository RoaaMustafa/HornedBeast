import React from 'react';
import HornedBeast from './HornedBeast';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

  render() {
    return <>
      <CardDeck >
        <CardColumns>
          {this.props.data.map((item) => {
            return <HornedBeast
              image_url={item.image_url}
              title={item.title}
              description={item.description}

              viewBeast={this.props.viewBeast}
              close={this.props.close} />;
          }
          )
          }
        </CardColumns>
      </CardDeck>
    </>;

  }

}


export default Main;
