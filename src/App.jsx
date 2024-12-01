import React, { useState, useEffect } from 'react';
import logo from './image.png'; // Import the image file
import upload from './upload.png'; // Import the image file
import data from './data.png'; // Import the image file
import one from './1.png'; // Import the image file
import two from './2.png'; // Import the image file
import three from './3.png'; // Import the image file
import four from './4.png'; // Import the image file
import five from './5.png'; // Import the image file
import six from './6.png'; // Import the image file

// Import Carousel from react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const App = () => {
  const [documentType, setDocumentType] = useState('Document');

  useEffect(() => {
    const documentTypes = ['Xls', 'Docx', 'Xml', 'Pdf', 'txt',  'Mp3', 'Mp4', 'Png', 'Jpeg', 'Srt', 'Excel', '.Csv', 'Json'];

    const interval = setInterval(() => {
      setDocumentType((prevType) => {
        const currentIndex = documentTypes.indexOf(prevType);
        const nextIndex = (currentIndex + 1) % documentTypes.length;
        return documentTypes[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Carousel responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    
    <div style={containerStyle}>
      {/* Top Navigation Bar */}
      <nav style={navStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Company Logo" style={{ height: "50px" }} />
            <h1 style={{ marginLeft: "10px", fontSize: '18px' }}>SmartCard AI</h1>
          </div>
          {/* Navigation Links */}
          <div>
           {/*  <a href="#pricing" style={navLinkStyle}>Pricing</a>
            <a href="#solutions" style={navLinkStyle}>Solutions</a>
            <a href="#login" style={navLoginStyle}>Login</a>*/}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={mainContentStyle}>
        {/* Card 1 with React Flow */}
        <div style={cardStyle}>
        <h1>
            <span style={{ margin: '0 0.3rem', marginRight: '10px', fontSize: '50px', fontWeight: '500' }}>Analyze your</span>
         
              <span style={{ color: '#11d660', marginRight: '10px', fontSize: '70px' }}> Structured </span>
              <span style={{ color: 'black', marginRight: '10px', fontSize: '50px' }}> & </span>
              <span style={{ color: '#11d660', marginRight: '10px', fontSize: '70px' }}> Unstructured Datasets</span>
              <span style={{ margin: '0 0.1rem', marginRight: '2px', fontSize: '50px', fontWeight: '500' }}> with a </span>
              <span style={{ margin: '0 0.1rem', marginRight: '2px', fontSize: '50px', fontWeight: '500' }}>Powerful Conversational AI  </span>
              <span style={{ margin: '0 0.1rem', marginRight: '2px', fontSize: '50px', fontWeight: '500'  }}>Engine for Quick, </span>
              <span style={{ margin: '0 0.1rem', marginRight: '2px', fontSize: '50px', fontWeight: '500'}}>Intelligent Insights.</span>
            </h1>
         

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', paddingBottom: '66.67%', height: 0, overflow: 'hidden', flex: 1 }}>
              <iframe
                src="https://lottie.host/embed/dc09d04e-96c3-47fd-96eb-c488a9a35cb0/lobCUUaYQR.json"
                title="Lottie Animation"
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '15%',
                  width: '70%',
                  height: '70%',
                  border: 'none',
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{  margin: '0 0.1rem', marginRight: '2px', fontSize: '40px', fontWeight: '500' }}>
          Transform Your Data Analysis Game. Unlock Insights with Conversational AI with No SQL, No Complex Formulas, Just Intelligent Conversations!
          </div>
          </div>
        </div>

        <div style={cardStyle}>
          
          <img src={data} alt="Image 7" style={imageStyle2} />
        </div>

        {/* Animated Multi-carousel */}
        <div style={cardStyle2}>
          <h2>200 + Pretrained Data Analysis</h2>
          <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#11d660',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize:'19px',
          marginBottom:'60px'

        }}
       
      >
        Add Custom Data Analysis
      </button>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            containerClass="carousel-container"
          >
            <img src={one} alt="Image 1" style={imageStyle} />
            <img src={two} alt="Image 2" style={imageStyle} />
            <img src={three} alt="Image 3" style={imageStyle} />
            <img src={four} alt="Image 4" style={imageStyle} />
            <img src={five} alt="Image 5" style={imageStyle} />
            <img src={six} alt="Image 6" style={imageStyle} />
          </Carousel>
        </div>

     
        <div style={cardStyle}>
        <div style={{ textAlign: 'center', padding: '10vw' }}>
  <div
    style={{
      margin: '0 0.5rem',
      marginRight: '2px',
      fontSize: '1.5rem',
      fontWeight: '300',
      maxWidth: '90%',
      lineHeight: '1.5',
    }}
  >
    The Custom Analysis Builder enables users to create and save personalized analyses by setting up step-by-step instructions or prompts for data processing, insight extraction, or reporting. Designed for repeated tasks, this feature allows users to define specific analytical flows, specify parameters, and set up custom instructions. Once saved, users can quickly rerun their custom analyses on new data without needing to reconfigure settings, saving time and improving consistency.
  </div>
</div>

        </div>
       </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 SmartCard AI. All rights reserved.</p>
      </footer>
      
    </div>
    
  );
};

// Inline styles
const containerStyle = {
 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden' // Add this line to prevent horizontal scrolling
  };
  


const navStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  padding: '10px',
  color: '#333',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

const navLinkStyle = {
  color: '#333',
  marginLeft: '20px',
  textDecoration: 'none',
};

const navLoginStyle = {
  display: 'inline-block',
  padding: '10px',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  borderRadius: '30px',
  textDecoration: 'none',
  textAlign: 'center',
  marginLeft: '20px',
};

const mainContentStyle = {
  flex: 1,
  padding: '80px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
};

const imageStyle = {
  width: '100%',
  height:'100%',
  borderRadius: '5px',
};

const imageStyle2 = {
  width: '80%',
  height:'80%',
  borderRadius: '5px',
};

const cardStyle = {
  padding: '40px',
  width: '100%',
  
  textAlign: 'center',
  borderRadius: '8px',
  marginBottom: '20px',
};

const cardStyle2 = {
  padding: '10px',
  width: '100%',
  
  textAlign: 'center',
  borderRadius: '8px',
  marginBottom: '20px',
};

const footerStyle = {
  backgroundColor: '#E9F3F2',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0',
};

export default App;
