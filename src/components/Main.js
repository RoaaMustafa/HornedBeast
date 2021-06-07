
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component{
    render(){
        return(
            <div>
                <CardColumns>
                {Data.map((item,i)=>{
                    return(
                        <HornedBeast 
                
                title={item.title}
                url={item.image_url}
              des={item.description}
              />
            
                    )

                     })}
                      </CardColumns>
            </div>
           
        )
    }

    
}


export default Main;