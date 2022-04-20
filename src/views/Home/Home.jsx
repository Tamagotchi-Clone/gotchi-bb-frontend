import React, { useEffect, useState } from 'react';
import 'animate.css';
import { getPetById } from '../../services/pets';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [randomImageArray, setRandomImageArray] = useState([{}]);

  useEffect(() => {
    const fetchImage = async () => {
      const data = await getPetById();
      const randomData = data.sort((a, b) => 0.5 - Math.random());
      setRandomPhotoArray(randomData);
      setLoading(false);
    };
    if (loading) {
      fetchImage();
    }
  }, [loading]);

  return (
    <div>
      <h1 className="animate__animated animate__flash">Welcome to Gotchi</h1>
      {randomImageArray.map((image) => (
        <div className="homepet" key={image.id}>
          <img
            className="animate__animated animate__bounce"
            src={image.image}
            alt={image.species}
          ></img>
        </div>
      ))}
    </div>
  );
}
