import React from 'react';
import { motion } from 'framer-motion';
import { IGlobalData } from '../interfaces/interfaces';
import { Container } from '@mui/material';

interface IProps {
  globalData: IGlobalData | undefined;
}

const AnimatedBar = ({ globalData }: IProps) => {
  const content = (
    <>
      <span className="px-8">🔥 Active Cryptos: {globalData?.data?.active_cryptocurrencies}</span>
      <span className="px-8">🏪 Markets: {globalData?.data?.markets}</span>
      <span className="px-8">🚀 Ongoing ICOs: {globalData?.data?.ongoing_icos}</span>
      <span className="px-8">⏳ Upcoming ICOs: {globalData?.data?.upcoming_icos}</span>
      <span className="px-8">✅ Ended ICOs: {globalData?.data?.ended_icos}</span>
    </>
  );

  return (
    <Container style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <motion.div
          className="flex space-x-10 text-white text-lg font-bold whitespace-nowrap"
          animate={{ x: ['80%', '-80%'] }}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '4rem',
            width: 'max-content',
          }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: 'linear',
          }}
        >
          {content}
          {content}
          {content}
        </motion.div>
      </div>
    </Container>
  );
};

export default AnimatedBar;
