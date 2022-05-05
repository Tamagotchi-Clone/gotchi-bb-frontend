import { useEffect, useState } from 'react';
import { getPets } from '../../services/pets';
import FadeIn from 'react-fade-in/lib/FadeIn';
import 'animate.css';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState([{}]);

  useEffect(() => {
    const fetchImage = async () => {
      const data = await getPets();
      const randomData = data[Math.floor(Math.random() * data.length)];
      setRandomImage(randomData.image);
      setLoading(false);
    };
    if (loading) {
      fetchImage();
    }
  }, [loading]);

  if (loading) return <span className="loader"></span>;

  return (
    <FadeIn delay={30}>
      <div className="home-container">
        <h1 className="animate__animated animate__flash">
          Welcome to <b>gotchi bb</b>
          <img className="tiny" src="https://i.postimg.cc/QFRxTtc8/pet4.png" />
        </h1>
        <div className="image-stack">
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
    </FadeIn>
  );
}
