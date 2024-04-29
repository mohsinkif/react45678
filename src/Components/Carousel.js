import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Components/Myimage1.jfif';
import Img2 from '../Components/Myimage2.jfif';
import Img3 from '../Components/Myimage3.jfif';
import 'bootstrap/dist/css/bootstrap.min.css';


function IndividualIntervalsExample() {
  return (
    <>
    <Carousel style={{marginLeft:"25%",marginRight:"25%",marginBottom:"10%"}}>
      <Carousel.Item interval={1000}>
      <div style={{width: '600 px', height:'600px'}}>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div style={{width: '600 px', height:'600px'}}>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div style={{width: '600 px', height:'600px'}}>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;
