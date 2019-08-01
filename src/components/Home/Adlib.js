import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  // CarouselControl,
  // CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Image1 from '../../images/folastraight.jpeg';
import Image2 from '../../images/folasmiling.jpeg';
import Image3 from '../../images/folaunlooking.jpeg';
const items = [
  {
    src: Image1,
    caption: 'I`m Oluwasegun Folarin Joseph, A Nigerian Front-End Developer.  '
  },
  {
    src: Image2,
    caption: 'I`m here to make sure, your Website/WebApp looks sweet for users to lick, with amazing functionalities '
  },
  {
    src: Image3,
    caption: 'Follow me on my social media handle Instagram: @pholarwalk Twitter: @OTUNBA_folarin '
  }
];

class Adlib extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
       
      
          <img id='sliderimg' src={item.src} alt={item.altText} width='1024' height='500' />
          <div className='TextCont' >
          <CarouselCaption captionHeader={item.caption} />
          
          </div>
        </CarouselItem>
        
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
        {slides}
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} /> */}
        {/* <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
      </Carousel>
    );
  }
}


export default Adlib;
