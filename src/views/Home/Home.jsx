import React, { useEffect, useState } from 'react';
import 'animate.css';
import { getPets } from '../../services/pets';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState([{}]);

  useEffect(() => {
    const fetchImage = async () => {
      const data = await getPets();
      const randomData = data[Math.floor(Math.random() * data.length)];
      console.log(randomData.image);
      setRandomImage(randomData.image);
      setLoading(false);
    };
    if (loading) {
      fetchImage();
    }
  }, [loading]);

  return (
    <div className="homeBox">
      <h1 className="animate__animated animate__flash">
        Welcome to <b>gotchi bb</b>
        <img className="tiny" src="https://i.postimg.cc/QFRxTtc8/pet4.png" />
      </h1>
      <div className="imageStack">
        <div className="images">
          <img
            className="animate__animated animate__bounce"
            src={randomImage}
          ></img>
        </div>
        <div>
          <img
            className="bubble"
            src="https://64.media.tumblr.com/c25ec7fde672bbcb5c36602e5c1a207c/c14749884306b11a-a2/s250x400/3a3b2d60a0c65ca3d86255a39ddf1f35cac2bd14.gifv"
          />
        </div>
      </div>
      <p>Pixel bb you can feed, clean, play with, and chat with.</p>
    </div>
  );
}
