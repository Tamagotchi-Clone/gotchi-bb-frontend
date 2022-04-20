import React, { useEffect, useState } from 'react';
import 'animate.css';
import { getPets } from '../../services/pets';

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
    <div>
      <h1 className="animate__animated animate__flash">Welcome to gotchi bb</h1>
      <img
        className="animate__animated animate__bounce"
        src={randomImage}
      ></img>
    </div>
  );
}
