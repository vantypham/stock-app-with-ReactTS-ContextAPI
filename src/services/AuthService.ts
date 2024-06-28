import axios from 'axios';
import { LoginUser } from '../models/LoginUser';

export const login = async (user: LoginUser) => {
    const response = await axios.get('https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000');
    console.log(response.data);
    const data = {username: user.username, token: 'TOKEN-X'};
    return data;
}

export const getStocks = async () => {
    const response = await axios.get('https://jsonmock.hackerrank.com/api/stocks');
    console.log(response.data);
    return response.data;
}

export const getStockByDate = async (date: string) => {
    const response = await axios.get('https://jsonmock.hackerrank.com/api/stocks?date='+date);
    console.log(response.data);
    return response.data;
}