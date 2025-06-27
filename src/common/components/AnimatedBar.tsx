import React from 'react';
import { motion } from 'framer-motion';
import { IGlobalData } from '../interfaces/interfaces';
import { Container } from '@mui/material';

interface IProps {
  globalData: IGlobalData | undefined;
}

const AnimatedBar = ({ globalData }: IProps) => {
  return (
    <Container style={{ overflow: 'hidden' }}>
      <motion.div
        className="flex space-x-10 text-white text-lg font-bold"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear',
        }}
      >
        <span className="px-4">
          {' '}
          🔥 Active Cryptos: {globalData?.data?.active_cryptocurrencies}{' '}
        </span>
        <span className="px-4"> 🏪 Markets: {globalData?.data?.markets} </span>
        <span className="px-4"> 🚀 Ongoing ICOs: {globalData?.data?.ongoing_icos} </span>
        <span className="px-4"> ⏳ Upcoming ICOs: {globalData?.data?.upcoming_icos} </span>
        <span className="px-4"> ✅ Ended ICOs: {globalData?.data?.ended_icos} </span>
      </motion.div>
    </Container>
  );
};

export default AnimatedBar;
