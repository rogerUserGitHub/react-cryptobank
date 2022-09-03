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
    market_cap: number
    total_supply: number;
    fully_diluted_valuation: number
    total_volume: number
}

export interface INewsData {
    title: string;
    desc: string;
    image: string;
    url: string;
    date: string;
}

export interface IGlobalData {
    data?: {
        active_cryptocurrencies?: number;
        upcoming_icos?: number;
        ongoing_icos?: number;
        markets?: number;
    }
}