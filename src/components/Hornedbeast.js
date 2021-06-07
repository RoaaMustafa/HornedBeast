import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';



class Hornedbeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numOfClick : 0
        }
    }


    incrementClick = () => {
        this.setState({
            numOfClick : this.state.numOfClick+1
        })
    }

    render(){
        return(

               
                <Card style={{ width: '18rem' }}>   
                <Card.Img variant="top" src={this.props.url} onClick={this.incrementClick} />
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.des}
                </Card.Text>
                <Card.Text>
                Number Of Click: {this.state.numOfClick}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
               
                



        );
    }
}

export default Hornedbeast;