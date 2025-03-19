import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Rose from '../assets/rose.png';

const shards = [
  { x: -50, y: -50, clip: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)' },
  { x: 50, y: -50, clip: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)' },
  { x: -50, y: 50, clip: 'polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)' },
  { x: 50, y: 50, clip: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' },
];

const shardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: shards[i].x,
    y: shards[i].y,
    scale: 0.5,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const Loader = () => {
  const [shattered, setShattered] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShattered(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-bg-color z-50'>
      <div className='relative flex items-center justify-center w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]'>
        {shattered ? (
          shards.map((shard, i) => (
            <motion.div
              key={i}
              custom={i}
              initial='hidden'
              animate='visible'
              variants={shardVariants}
              className='absolute w-1/2 h-1/2 bg-cover bg-center'
              style={{
                backgroundImage: `url(${Rose})`,
                clipPath: shard.clip,
              }}
            />
          ))
        ) : (
          <motion.img
            src={Rose || '/placeholder.svg'}
            alt='Rose decoration'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='max-w-full'
          />
        )}
      </div>
    </div>
  );
};

export default Loader;
