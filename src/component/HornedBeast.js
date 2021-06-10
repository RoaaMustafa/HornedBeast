import React from 'react';
import { Card, Button} from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';




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

        <CardColumns className={CardColumns}>
          <Card style={{ width: '18rem' }} className="text-center" onClick={this.prop3Function}>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img onClick={this.favouriteCounter} src={this.props.imgSrc} />
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text>
                Likes :{this.state.counter} ❤️
              </Card.Text>
              <Button onClick={this.prop3Function} variant="primary">Like 👍</Button>

            </Card.Body>
          </Card>
        </CardColumns >



      </>
    );
  }
}

export default HornedBeasts;
