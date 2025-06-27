export interface IPropsMock {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

export interface IPropsRadio {
  label1?: string;
  label2?: string;
}

export interface ICryptoData {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  market_cap_rank: number;
  image: string;
  price_change_percentage_24h: number;
  low_24h: number;
  high_24h: number;
  market_cap: number;
  total_supply: number;
  fully_diluted_valuation: number;
  total_volume: number;
  ath: number;
  atl: number;
  last_updated: string;
  sparkline: string;
}

export interface IExchangeData {
  rates?: {
    name?: {
      name?: string;
      unit?: string;
      value?: number;
      type?: string;
    };
  };
}

export interface IExchangeData2 {
  name?: string;
  unit?: string;
  value?: number;
  type?: string;
}

export interface INewsData {
  name: string;
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
  description: string;
}

export interface IGlobalData {
  data?: {
    active_cryptocurrencies?: number;
    upcoming_icos?: number;
    ended_icos?: number;
    ongoing_icos?: number;
    markets?: number;
    market_cap_change_percentage_24h_usd: string;
    market_cap_percentage?: {
      ada: number;
      bnb: number;
      btc: number;
      doge: number;
      eth: number;
      sol: number;
      steth: number;
      usdc: number;
      usdt: number;
      xrp: number;
    };
  };
}

export interface IGraphData {
  market_caps: number;
  prices: number;
  total_volumes: number;
}

export interface ITrendingCrypto {
  item?: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data?: {
      price?: number;
      sparkline: string;
    };
  };
}
