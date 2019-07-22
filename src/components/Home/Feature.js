import React from 'react';
import { Media } from 'reactstrap';


class Feature extends React.Component {
 
  
  render(){
  return (
    <div className='media-container'>
    <h1 data-aos="zoom-in">Why Work With Me ?</h1>
    <Media>
    
      <Media left href="#">
      <div data-aos="fade-right" >
       <img id='img1' src={ require('../../images/screenhtml.jpg') } width='500'  alt='f' />
       </div>
      </Media>
      <Media id='text' body>
      <div data-aos="fade-left" >
      <h2>Experienced</h2>
        
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </Media>
    </Media>
    <Media>
    
        <Media id='text' body>
        <div data-aos="fade-right" >
        <h2>Ready to Work</h2>
          
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </Media>

        <Media right href="#">
        <div data-aos="fade-left" >
        <img id='img1' src={ require('../../images/piccomputerdeskscreen.jpg') } width='440' alt='f' />
        </div>
        </Media>
      </Media>
      <Media>
      <Media left href="#">
      <div data-aos="fade-right" >
      <img id='img1' src={ require('../../images/teamwork.jpg') } width='500' height='350' alt='f' />
      </div>
      </Media>
      <Media  id='text' body>
      <div data-aos="fade-left" >
      <h2>Team Player</h2>
        
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </Media>
    </Media>
    <Media>
        <Media id='text' body>
        <div data-aos="fade-left" >
        <h2>Trusted Remote Developer</h2>
          
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </Media>
        <Media right href="#">
        <div data-aos="fade-right" >
        <img id='img1' src={ require('../../images/remotecoding.jpg') } width='440' alt='f' />
        </div>
        </Media>
      </Media>
      
      
    
      </div>
      
  );
}
}

export default Feature;