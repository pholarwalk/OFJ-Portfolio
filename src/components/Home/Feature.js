import React from 'react';
import { Media } from 'reactstrap';
import AOS from "aos";
import 'aos/dist/aos.css';

class Feature extends React.Component {
 
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
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
      
      <div data-aos="zoom-in"> 
      <h1>Tool Set</h1>
      
      
      <i class="fab fa-figma hov"></i>
        <i class="fab fa-html5 hov"></i>
        <i class="fab fa-css3-alt hov"></i>
        <i class="fab fa-js-square hov"></i>
        <i class="fab fa-bootstrap hov"></i>
        <i class="fab fa-react hov"></i>
        <i class="fab fa-npm hov"></i>
        <i class="fab fa-node-js hov"></i>
        <i className="fab fa-github hov"></i>
        <i class="fab fa-python hov"></i>
        <i class="fab fa-slack hov"></i>
        <i class="fab fa-codepen hov"></i>
         
      </div>
    
      </div>
      
  );
}
}

export default Feature;