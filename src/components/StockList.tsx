import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getStocks, getStockByDate } from '../services/AuthService';
import {parse, format} from 'date-fns';
// import { formatInTimeZone } from 'date-fns-tz'
// const dateDemo = new Date('2000-01-05T10:46:20Z')
// formatInTimeZone(dateDemo, 'America/New_York', 'yyyy-MM-dd HH:mm:ssXXX') // 2014-10-25 06:46:20-04:00
// formatInTimeZone(dateDemo, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz') // 2014-10-25 06:46:20 EST
// const formatString2Date = (date: string) => {
//     return parse(date, 'd-MMMM-yyyy', new Date());
// }
const formatDate2String = (date: Date) => {
    return format(date, 'd-MMMM-yyyy');
}

interface Stock {
    date: string;
    high: number;
    low: number;
    open: number;
    close: number;
}

export default function StockList() {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {state} = useContext(AuthContext);

    const [date, setDate] = useState<string>('2000-01-05');

    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => { 
        setDate(e.target.value);

        const utcDate = new Date(e.target.value);//original date.
        utcDate.setDate(utcDate.getUTCDate());
        utcDate.setMonth(utcDate.getUTCMonth());
        utcDate.setFullYear(utcDate.getUTCFullYear());
        const dateString = formatDate2String(utcDate);
        console.log("UTC modified date: " + dateString);

        //call service
        await getStockByDate(dateString).then(res => {
            setStocks(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        // fetch stocks
        const fetchStocks = async () => { 
            setIsLoading(true);
            await getStocks()
            .then(res => {
                setStocks(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
        }
        // fetch call
        if (state.isLogIn) {
            fetchStocks();
        }

    }, [state.isLogIn]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (!state.isLogIn) {
        return <div>Please login</div>
    }

    return (
        <div>
            <h1>Stock List</h1>
            <p>
                <input type='date' id='date' name='date' value={date} onChange={handleOnChange}/>
            </p>
            {
                stocks.map(stock => {
                    return (
                        <div key={stock.date}>
                            <h3>{stock.date}</h3>
                            <p>HIGH:{stock.high} - LOW:{stock.low}</p>
                            <p>OPEN:{stock.open} - CLOSE:{stock.close}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
}