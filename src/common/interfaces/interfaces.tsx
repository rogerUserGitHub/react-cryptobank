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
    price_change_percentage_24h: number
}