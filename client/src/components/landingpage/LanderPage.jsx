import React, { useEffect, useState } from 'react'
import '../../styles/LanderPage.css'
import NavBar from '../navbar/NavBar'
import lp_main from '../../images/lp_main.jpg'
import { TfiSearch } from "react-icons/tfi";
import PopularListing from './PopularListing';
import house from '../../images/house.png'
import apartments from '../../images/apartments.png'
import ScrollAnim from './ScrollAnim';
import videoSrc from '../../images/video.mp4'
import Footer from '../footer/Footer';
import PropertySlider from './PropertySlider';
import { useAppContext } from '../../context/AppContext';
import Enquire from '../form/Enquire';
import First from './First';
import { SlHome } from "react-icons/sl";
import { BiSolidHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

function LanderPage() {
  const { formOpen } = useAppContext()
  const [expand,setExpand] =useState(false)

 


  const listings = [
    {
      price: '$2,275,000',
      address: '27 Palmer Drive, Novato, CA 94949',
      beds: 4,
      baths: 3,
      sqFt: 3755,
      status: ' Coming Soon',
      image: 'https://2.imimg.com/data2/DX/QC/MY-4229387/individual-house-for-sale-at-vadapalani-500x500.jpg', // Replace with actual image paths
    },
    {
      price: '$3,398,000',
      address: '2616 Hale Drive, Burlingame, CA 94010',
      beds: 4,
      baths: 3,
      sqFt: 2460,
      status: ' Coming Soon',
      image: 'https://www.dealaprop.com/wp-content/uploads/2020/10/780b5b14-7d7a-499d-ba45-b1b09da63e11.jpg',
    },
    {
      price: '$1,799,000',
      address: '234 Causeway Street, Unit 709, Boston, MA 02114',
      beds: 3,
      baths: 2,
      sqFt: 1661,
      status: ' Coming Soon',
      image: 'https://im.proptiger.com/1/1465915/6/solitaire-images-for-elevation-of-my-proptree-solitaire-5610745.jpeg',
    },
    {
      price: '$1,750,000',
      address: '450 Hayes Street, Unit PH6, San Francisco, CA 94102',
      beds: 2,
      baths: 2,
      sqFt: null,
      status: ' Coming Soon',
      image: 'https://i.ytimg.com/vi/LL40Zu5NtR4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQsJ_Csnl0QWXlkq1oJY1lYgIQvA',
    },
    {
      price: '$1,799,000',
      address: '234 Causeway Street, Unit 709, Boston, MA 02114',
      beds: 3,
      baths: 2,
      sqFt: 1661,
      status: ' Coming Soon',
      image: 'https://www.ziraholidays.com/wp-content/uploads/2021/01/luxury-farm-house-for-hire-in-mahabalipuram.jpg',
    },
    {
      price: 'Contact Agent',
      address: '69 Walnut Street, Somerville, MA 02143',
      beds: 6,
      baths: 4,
      sqFt: 3006,
      status: ' Coming Soon',
      image: 'https://imagecdn.99acres.com/media1/25367/18/507358825M-1727352908034.webp',
    }
  ];
  const cities = [
    { name: "Chennai Houses For Rent", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQbz3fjkId-XeuOE1oaBGLgBfa3SKdtOG30d0iL05S8W3_e9zOj3qpgh6R2HjrBYU5f2sO9a-ab0dfCYCu-uosTH90jNNxc73t3ROGZvw" },
    { name: "Madurai Houses For Rent", image: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28160317/Madurai-feature-compressed.jpg" },
    { name: "Coimbatore Houses For Rent", image: "https://www.acefreightforwarder.com/wp-content/uploads/2020/11/Freight-Forwarding-Services-in-Coimbatore.jpg" },
    { name: "Trichy Houses For Rent", image: "https://www.smarttrichy.in/wp-content/uploads/2021/06/trichy-slider.jpg" },
    { name: "Orlando Houses For Rent", image: "https://www.seawatersports.com/images/places/theni.jpg" },
    { name: "Hosur Houses For Rent", image: "https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2023/03/27/bng24-hosur-road-7-1-1069046-1641578915-1101382-1650169201-1-1203865-1679882486.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" },
    { name: "Salem Houses For Rent", image: "https://lh3.googleusercontent.com/proxy/LO0YWtiA_Yma-U14DnhDvg6PvH55QHezv08hnUkG3V9_qE2IZQ5BAhd75Yn_0AdN_nv2-qZSCJwJ_gQiJCVSltubTF8w" },
    { name: "Thanjavur Houses For Rent", image: "https://cdnbbsr.s3waas.gov.in/s3ec04586f9b4035e5997f77635b13cc04/uploads/2023/11/2023110930.jpg" }
  ];
  return (
    <>
      <NavBar />
      <Enquire/>
      <First/>
      <div className={`lp_main ${close}`}>
        <div className='lp_div1' >
          <div className='lp_div11'>

            <img src={lp_main} alt="" />
            <div className='lp_div12'>
              <div className='lp_div122'>
                <div className='lp_div122_1'>

                </div>
                <div className={`lp_div122_2 ${expand}`}>
                  <div className={`search-bar ${expand}`}  onFocus={()=>{setExpand(true)}} onBlur={()=>{setExpand(false)}}>
                    <input type="text" placeholder="City, Area, Building..." />
                    <button type="submit">
                      <span role="img" aria-label="search"><TfiSearch /></span>
                    </button>
                  </div>
                  <div className='lp_div122_3'>
                    {expand?(
                      <div>
                      <h2>Quick Links</h2>
                      <p><IoIosArrowForward/> About</p>
                      <p><IoIosArrowForward/> Login</p>
                      <p><IoIosArrowForward/> Connectus</p>
                    </div>
                    ):null}

                  </div>

                </div>
              </div>
              <div className='lp_div121'>
                <div>
                 <span><img src={house} alt="" /></span> BUY HOUSE
                </div>
                <div>
                <span><img src={apartments} alt="" /></span>  SELL HOUSE

                </div>

              </div>

            </div>

          </div>
        </div>
        <div className='lp_div2'>
          <div>
            <h2>EXCLUSIVE</h2>
          </div>
          <div className='lp_div21' >
            <div>
            <div className="listing-grid">
              {listings.map((listing, index) => (
                <PopularListing listing={listing}  index={index}/>
              ))}
            </div>
            <div className='lp_div211'>
              <button><span>View All </span>
              <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="home-icon"
        width={20}
      >
        <path
          d="M32 12L6 36h8v16h12V36h12v16h12V36h8z"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
              </button>
            </div>
            </div>
            
          </div>

         <div className='lp_div22'>
          <h2>popular cities in TamilNadu</h2>
         <div className="city-listing-container">
            {cities.map((city, index) => (
              <div key={index} className="city-card">
                <img src={city.image} alt={city.name} className="city-image" />
                <div className="city-name-overlay">
                  <h3>{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
         </div>


        </div>
        <div className='lp_div3'>
          <div className='lp_div31'>
            <h1>The Perfect Place to Manage Your Property</h1>
          </div>
          <div className='lp_div32'>
            <ScrollAnim videoSrc={videoSrc}/>

          </div>
        

        </div>
        <div>
          <PropertySlider/>
        </div>

      </div>
      <>
      <Footer/>
      </>
    </>
  )
}

export default LanderPage