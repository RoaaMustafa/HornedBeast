import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




class SelectedBeast extends React.Component{

  render(){
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Dialog >
          <Modal.Header closeButton show={this.props.show} onHide={this.props.close}>

            <Modal.Title>{this.props.details.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card.Img onClick={this.displayBeast} variant="top" src={this.props.details.image_url} alt={this.props.details.title} title={this.props.details.title}/>
            <Card.Text><p>{this.props.details.description}</p></Card.Text>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>Close</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </Modal>
    );
  }
}







export default SelectedBeast;
