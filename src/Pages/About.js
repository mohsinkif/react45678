import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Team from "../Components/Team";
import { IoBookOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import Footer from "../Components/Footer";
import IndividualIntervalsExample from '../Components/Carousel'
export default function About({ slides }) {
  return (
    <>
    <Navbar/>
    <>
      <div className='about-us w-[90%] mx-auto'>
            <div className="title text-4xl font-bold text-center py-8">Our Story</div>
            <div className="content py-8">
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>Who We Are</h1>
                        <p className='pt-2'>With a team of passionate experts in agriculture, data science, and drone technology, we leverage cutting-edge aerial imagery and machine learning algorithms to provide actionable intelligence for crop monitoring and decision-making.

Through our intuitive platform, farmers can gain valuable insights into crop health, detect potential issues early, and make informed decisions to enhance productivity and profitability.

Join us on our mission to transform agriculture and cultivate a brighter, more sustainable future for generations to come.

</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <IoBookOutline size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>What We Do</h1>
                        <p className='pt-2'>At AgriDrone, we specialize in monitoring crop growth and assessing crop readiness to provide farmers with timely insights and actionable recommendations. Leveraging state-of-the-art drone technology, our team captures high-resolution aerial images of farmland throughout the growing season. These images are meticulously analyzed by our experts to evaluate crop growth indicators. By assessing these parameters, we determine the readiness of crops for key stages including planting, flowering, fruiting, and harvesting.

Our primary objective is to equip farmers with actionable insights to optimize crop management practices and maximize yield. We provide farmers with comprehensive reports and recommendations tailored to their specific crops and growing conditions. These insights empower farmers to make informed decisions regarding Harvesting.

At AgriDrone, we believe in the power of data-driven decision-making to enhance agricultural productivity and sustainability. Our platform offers intuitive dashboards and decision support tools, allowing farmers to access real-time crop status information and make informed decisions on the go. We are committed to providing continuous monitoring and support services, ensuring that farmers have access to timely information and assistance throughout the crop cycle.</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <TiPencil size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>Where We Do It</h1>
                        <p className='pt-2'>AgriDrone operates across agricultural regions, spanning vast farmlands and plantations. Our services are available to farmers and agricultural communities in diverse geographic locations, including rural areas, suburban regions, and even remote agricultural landscapes. We collaborate with farmers and agribusinesses worldwide, leveraging our expertise and technology to address the unique challenges and opportunities present in each location.
                        By extending our reach to different agricultural settings, AgriDrone aims to support farmers worldwide in optimizing their crop management practices, improving yield, and fostering sustainable agriculture. We are committed to making our technology accessible and impactful, empowering farmers everywhere to thrive in today's dynamic agricultural landscape.</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <IoBookOutline size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
            </div>
        </div>
    </>
    <h1 className='title text-4xl font-bold text-center py-8'>Our Motive</h1>
    <div className="title text-4xl font-bold text-center py-8" style={{color:"grey"}}>“Working in Partnership is crucial for us to deliver our clients with <br></br> sustainable commitments”</div>
    <div className="title text-4xl font-bold text-center py-8">Team</div>
      <Team />
      <br/><br/><br/>
      {/* <IndividualIntervalsExample/> */}
      <Footer/>
    </>
  );
}
