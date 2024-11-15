import React, { useState } from 'react';
import '../../styles/PropertySlider.css'
import { HiArrowLongRight,HiArrowLongLeft } from "react-icons/hi2";
import { RiHotelBedLine } from "react-icons/ri";
import { LuBath } from "react-icons/lu";

const slides = [
  {
    id: 1,
    image: 'https://www.siddharthconstruction.com/wp-content/uploads/2024/04/PHOTO-2022-04-14-12-07-20.jpg', // replace with actual URLs or paths
    address: '2/2 Steinton Street',
    location: 'Guindy',
    beds: 4,
    baths: 3,
    parking: 1,
    city:"Chennai"
  },
  {
    id: 2,
    image: 'https://th-i.thgim.com/public/incoming/oahatz/article68740484.ece/alternates/FREE_1200/6857c0c9-7ab0-4c30-946c-647f1891d1e0%201.JPG',
    address: '3 Suwarrow Street',
    location: 'Gandipuram',
    beds: 4,
    baths: 3,
    parking: 1,
    city:"Coimbatore"
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/474x/a9/70/84/a97084830dbd8fe0dbda6d3fbd21ad5f.jpg',
    address: '22 Wattle Avenue',
    location: 'Manaparai',
    beds: 4,
    baths: 3,
    parking: 2,
    city:"Trichy"

  },
  {
    id: 4,
    image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202408131841033312-d659d002-a21f-4934-aafa-295401c67744.jpg',
    address: '22 Wattle Avenue',
    location: 'Kollinure',
    beds: 4,
    baths: 3,
    parking: 2,
    city:"Madurai"
  },
];


function PropertySlider() {
    const [currentIndex, setCurrentIndex] = useState("one");
    const [Hover,setHover]=useState(false)



  const slideRight = () => {
    if(currentIndex == 'three'){
        return
    }
  
      if(currentIndex == 'one'){
        setCurrentIndex("two")
      }
      if(currentIndex == 'two'){
        setCurrentIndex("three")
      }
    
    
      
    };
  
    const slideLeft = () => {
        if(currentIndex == 'one'){
            return
        }
        setCurrentIndex(currentIndex - 1 )
      if(currentIndex == 'two'){
        setCurrentIndex("one")
      }
      if(currentIndex == 'three'){
        setCurrentIndex("two")
      }
    

    };

  return (
    <div className='pl_main'>
        <div className='pl_container1'>
         <div className='pl_container1_div1'>
            <h2>Prestige properties</h2>

         </div>
         <h1>Exclusive listing</h1>
         <p>Whether you’re buying or selling, prestige properties call for a tailored approach. Discover a Northern Beaches real estate agency with the expertise exceptional homes require.</p>
         <button className='main_button'>Enquire Now
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
        <div className='pl_container2'>
            <div className='pl_container2_div1'>
            {slides.map((item,index)=>(
                <div className={`pl_container2_div11 ${currentIndex}`} style={{backgroundImage:`url(${item.image})`}} onMouseEnter={()=>setHover(item.id)} onMouseLeave={()=>setHover(false)}>
                    <div className='pl_container2_div11_1'>
                    </div>
                    <div className='pl_container2_div11_2'>
                        <h1>{item.city}</h1>
                        <h2>{item.location}</h2>
                        <div><span>{item.beds} <RiHotelBedLine/></span> <span>{item.baths}<LuBath />                        </span></div>



                    </div>
                    <img className={`hovr_img ${item.id == Hover?"true":'false'}`} src={item.image} alt="" />
                    <div className='pl_container2_div11_3'>

                    </div>

                </div>
            ))}

            </div>
            <div className='pl_container2_div2'>
                <div className='pl_container2_div21'>
                    <p>1</p>
                    <div>
                        <div className={`pl_container2_div21_1 ${currentIndex}`}></div>
                    </div>
                    <p>4</p>

                </div>
                <div className='pl_container2_div22'>
                <button  onClick={slideLeft}><HiArrowLongLeft/></button>

                    <button onClick={slideRight}><HiArrowLongRight/></button>

                </div>

            </div>
        </div>

    </div>
  );
}

export default PropertySlider;
