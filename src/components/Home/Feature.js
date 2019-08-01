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
        
      I have got Positive Attitude, a can do mindset and Quick Learning Ability, Deep and Broad Technical Experience with High-End User Focus.
</div>
      </Media>
    </Media>
    <Media>
    
        <Media id='text' body>
        <div data-aos="fade-right" >
        <h2>Ready to Work</h2>
          
        Im a ready to work based onQualification / Certification, Computer Programming / Coding skill, Logical Thinking & Problem-solving, i possess the attribute Patience being  Attentive to Detail, also Business-savvy.n</div>
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
        
      Im a great teamplayer, Active listener that shows Genuine Commitment,who doesnt stay in the shadows,pretty much flexible,100% Reliable and responsible, ready to solve problem or help a colleague, show full support and respect others, and i recognise when im wrong and take to correction for progress, to crown it all i keep the team informed.

        </div>
      </Media>
    </Media>
    <Media>
        <Media id='text' body>
        <div data-aos="fade-left" >
        <h2>Trusted Remote Developer</h2>
          
        Im a focused developer with apt time management abilities, with great Communication skill also Collaborating with other colleagues, im guaranteed to be a self-starter and independent worker,where i work with little direction but produces impactful work.
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