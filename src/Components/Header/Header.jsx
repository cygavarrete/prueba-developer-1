import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://private-f5cb41-pruebafrontend2024.apiary-mock.com/principal');
        const data = await response.json();
        setBannerData(data[0]);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="header">
      <img className="banner-background" src={bannerData.urlBannerBackgroud} alt="Background" />
      <img className="banner-image" src={bannerData.urlBannerImg} alt="Banner" />
    </div>
  );
};

export default Header;