import { useEffect, useState } from 'react';
import Banner from '../common/components/Banner';
import CryptoCards from '../common/components/CryptoCard';
import { News } from '../common/components/News';
import { INewsData } from '../common/interfaces/interfaces';


export default function Homepage() {
  return (
    <>
      <br />
      <Banner />
      <br />
      <CryptoCards />
      <br />
      <News />
    </>
  );
}
