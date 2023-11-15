

import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link} from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../components/Home.css";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4004/api/getproduct');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='homepage'>
        {products.map((item, index) => (
          <div key={index} className="slide">
            <Link to={`/product/${index}`}>
              <Slider {...settings} className='image'>
                {item.image.map((imageUrl, imageIndex) => (
                  <img className='picture' key={imageIndex} src={imageUrl} alt={`Product Image ${imageIndex + 1}`} />
                ))}
              </Slider>
            </Link>
            <h3 className='text'>{item.title}</h3>
            <p className='text'>Description: {item.discribtion}</p>
            <p className='text'>Price: {item.price}</p>
          </div>
        ))}
      </div>
      <div className='footer'>
        <div>
      <h3>Support</h3>
      <p>Help Centre</p>
      <p>AirCover</p>
      <p>Anti-discrimination</p>
      <p>Disability support</p>
      <p>Cancellation option</p>
      <p>Report neighbourhood concern</p>
      </div>
      <div>
      <h3>Hosting</h3>
      <p>Airbnb your home</p>
      <p>AirCover for Hosts</p>
      <p>Hosting resource</p>
      <p>Community forum</p>
      <p>Hosting responsibility</p>
      </div>
      <div>
      <h3>Airbnb</h3>
      <p>Newsroom</p>
      <p>New features</p>
      <p>Careers</p>
      <p>Investors</p>
      <p>Airbnb.org emergency stays</p>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
