import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Components/Myimage1.jfif';
import Img2 from '../Components/Myimage2.jfif';
import Img3 from '../Components/Myimage3.jfif';
import 'bootstrap/dist/css/bootstrap.min.css';


function IndividualIntervalsExample() {
  return (
    <>
    <Carousel style={{marginLeft:"25%",marginRight:"25%",marginBottom:"10%", marginTop:'7%'}}>
      <Carousel.Item interval={1000}>
      <div style={{width: '600 px', height:'600px'}}>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Modernize Farming Practices with Advanced Machinery</h3>
          <p>Efficiently manage your fields and boost productivity with our cutting-edge tractor technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div style={{width: '600 px', height:'600px'}}>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Enhance Efficiency with Precision Agriculture</h3>
          <p>Maximize yields and streamline operations with our cutting-edge precision agriculture solutions.</p>
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
          <h3>Empower Farmers with Smart Farming Apps</h3>
          <p>Access real-time insights and manage your farm operations from anywhere with our intuitive mobile application.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;
