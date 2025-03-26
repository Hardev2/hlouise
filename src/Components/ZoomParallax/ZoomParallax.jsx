import './style.css';
import pic1 from '../../../public/images/image5.jpg';
import pic2 from '../../../public/images/image1.jpg';
import pic3 from '../../../public/images/image6.jpg';
import pic4 from '../../../public/images/cat.png';
import pic5 from '../../../public/images/image2.jpg';
import pic6 from '../../../public/images/sunset.jpg';
import pic7 from '../../../public/images/image7.jpg';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start -30%', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: pic1, scale: scale4 },
    { src: pic2, scale: scale5 },
    { src: pic3, scale: scale6 },
    { src: pic4, scale: scale5 },
    { src: pic5, scale: scale6 },
    { src: pic6, scale: scale8 },
    { src: pic7, scale: scale9 },
  ];

  return (
    <div className='w-full h-auto bg-bg-color'>
      <div ref={container} className='container'>
        <div className='sticky w-full bg-bg-color'>
          {pictures.map(({ src, scale }, index) => (
            <motion.div key={index} style={{ scale }} className='el'>
              <div className='imageContainer'>
                <img src={src} alt='image' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
