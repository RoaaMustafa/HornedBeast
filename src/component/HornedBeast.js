import React from 'react';
import { Card, Button } from 'react-bootstrap';



class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0

    };
  }

  favouriteCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      }
    );
  }

  prop3Function = () => {
    this.props.prop2Function();

  }

  render() {
    return (
      <>


        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img onClick={this.favouriteCounter} src={this.props.imgSrc} />
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              favourit❤️:{this.state.counter}
            </Card.Text>
            <Button onClick={this.prop3Function} variant="primary">VOTE </Button>

          </Card.Body>
        </Card>



      </>
    );
  }
}

export default HornedBeasts;
