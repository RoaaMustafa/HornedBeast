import React from 'react';
import { Card, Button } from 'react-bootstrap';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfLikes: 0,
    };
  }

  increaseNumOfLikes = () => {
    this.setState({
      numOfLikes: this.state.numOfLikes + 1,

    });
  }

  displayBeast = () => {
    this.props.viewBeast(this.props);

  }




  render() {
    return (
      <div>


        <Card bg="info" bg-primary border="dark" style={{ width: '18rem' }} onClick={this.displayBeast}>


          <Card.Title><h2>{this.props.title}</h2></Card.Title>

          <Card.Img height={250} width={250} onClick={this.increaseNumOfLikes} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
          <Card.Body >
            <Card.Text><p>{this.props.description}</p></Card.Text>

            <Card.Text><p>Number Of Likes: {this.state.numOfLikes}❤️</p></Card.Text>
            <Button >Like 👍 </Button>


          </Card.Body>
        </Card>
        <br />
      </div>

    );
  }
}



export default HornedBeast;
