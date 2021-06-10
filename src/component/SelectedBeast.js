import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

  render() {
    return (
      <>

        <Modal show={this.props.modalShowFunction} onHide={this.props.handleClose}>

          <Modal.Header  closeButton show={this.props.modalShowFunction} onHide={this.props.handleClose}>
            {this.props.SelectedBeastHeader}
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.SelectedBeastBody} alt='' style={{ width: "450px", height: "400px" }}></img>
          </Modal.Body>

          <Modal.Footer>
            {this.props.SelectedBeastFooter}

            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>

        </Modal>

      </>
    );

  }
}


export default SelectedBeast;
