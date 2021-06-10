import React from 'react';
import HornedBeasts from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import datajason from './data.json';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      filteredDataJSON: datajason,
    };

  }

  prop1Function = (headerData,bodyData,footerData) => {
    this.props.functionProp(headerData,bodyData,footerData);


  }

  changeRenederedData = (event) => {

    let hornes = event.target.value;



    let newArr = this.props.hornedDataMain.filter(n => {
      if (hornes === 'All') {
        return n;
      } else if ( parseInt(hornes) === parseInt(n.horns)) {

        return n;
      }
    });
    this.setState({
      filteredDataJSON: newArr,
    });

  }


  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Hornes Number</Form.Label>
            <Form.Control as="select" name="hornes" onChange={this.changeRenederedData} >
              <option value='All'>All</option>
              <option value='1' >1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>wow</option>
            </Form.Control>
          </Form.Group>


        </Form>

        <CardColumns>
          {
            this.state.filteredDataJSON.map(item => {
              return (
                <>

                  <HornedBeasts
                    title={item.title}
                    imgSrc={item.image_url}
                    description={item.description}
                    prop2Function={() => this.prop1Function(item.title, item.image_url, item.description)} />



                </>
              );
            })
          }
        </CardColumns>
      </>

    );
  }

}

export default Main;
