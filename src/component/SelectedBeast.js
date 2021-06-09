import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

  render() {
    return (
      <>

        <Modal show={this.props.modalShowFunction}>

          <Modal.Header>
            {this.props.SelectedBeastContent}
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.SelectedBeastContent2} alt='' style={{ width: "450px", height: "400px" }}></img>
          </Modal.Body>

          <Modal.Footer>
            {this.props.SelectedBeastContent3}

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
