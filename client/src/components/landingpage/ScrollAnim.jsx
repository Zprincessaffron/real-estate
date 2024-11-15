import { useEffect, useRef, useState } from 'react';
import '../../styles/ScrollAnim.css';
import { useAppContext } from '../../context/AppContext';
function ScrollAnim() {
  const ref = useRef(null);
  const canvasRef = useRef(null); // Canvas ref for the images
  const [loadedImages, setLoadedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const { formOpen,setFormOpen } = useAppContext()

  // Loading all images into memory once when the component mounts
  useEffect(() => {
    const imagesArray = [];
    const loadImage = (index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `/images/${index}.webp`; // Path to images in public folder
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Image ${index} failed to load`);
      }); 
    };

    // Load all 200 images
    const loadImages = async () => {
      try {
        const images = [];
        for (let i = 1; i <= 252; i++) {
          const img = await loadImage(i);
          images.push(img);
        }
        setLoadedImages(images);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, []);

  // Handle scroll events to calculate the index and increase speed
  const handleScroll = () => {
    if (loadedImages.length > 0 && isInView) {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / totalHeight;
      
      // Increase the speed by multiplying the scrollPercentage with a factor (e.g., 1.5)
      const speedFactor = 1; // Adjust this number to increase/decrease speed
      const index = Math.floor(scrollPercentage * (loadedImages.length - 1) * speedFactor);
      
      // Set the index, ensuring it stays within bounds
      setCurrentIndex(Math.min(index, loadedImages.length - 1));
    }
  };

  // Render the current frame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && loadedImages.length > 0) {
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        context.drawImage(loadedImages[currentIndex], 0, 0); // Draw the current frame
      }
    }
  }, [currentIndex, loadedImages]);
 
  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting); // Set the state to true when the section is in view
    }, { threshold: 0.1 }); // Trigger when 10% of the target div is in view

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    if (isInView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, [isInView, loadedImages]);

  return (
    <div className='sa_main'>
      <div> {/* Some content above */} </div>
      
      <div className="newone" ref={ref}> {/* The div where animation will be triggered */} 
        <canvas className="canvass" width={1000} height={500} ref={canvasRef} />
		<div className='sa_div21'>
			<h3>Looking to buy or sell a Home?</h3>
			<p>We’re the most respected company in the industry because we deliver extraordinary experiences by defying mediocrity and always giving you 121% of what you expect from us.</p>
			<div className='sa_div21_1'>
			<button className='main_button'>Buy
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
			<button className='main_button'>Sell
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
			<button className='main_button' onClick={()=>setFormOpen(true)}>Enquire
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
      
      <div > {/* Some content below */} </div>
    </div>
  );
}

export default ScrollAnim;
