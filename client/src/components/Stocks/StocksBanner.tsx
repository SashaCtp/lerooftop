import React, { Dispatch, useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Loader from "../Loader/Loader";
import Stock from "./Stock";

import './stocks.css';

const StocksBanner = () => {

    const [stocksData, setStocksData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        fetch(
            'http://localhost:3000/api/stocks/quote?region=US&lang=en&symbols=AAPL%2CGOOG%2CAMZN%2CMSFT',
            {
                method: 'GET'
            })
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setStocksData(data.quoteResponse.result);
                console.log(data);
                setLoaded(true);
            })
            .catch(err => {
                console.error(err);
                setLoaded(true);
            });
    }, []);

    if (!loaded) {
        return (
            <Banner>
                <Loader text="Loading stocks ..." />
            </Banner>
        );
    }

    if (loaded && stocksData == null) {
        return (
            <Banner>
                No data to display
            </Banner>
        );
    }

    return (
        <Banner>
            <div className="stocks">
                {
                    stocksData.map((stock: any, index, arr) => {
                        return (
                            <Stock key={index} stock={{
                                longName: stock.longName,
                                shortName: stock.shortName,
                                regularMarketPrice: stock.regularMarketPrice,
                                symbol: stock.symbol,
                                regularMarketChangePercent: stock.regularMarketChangePercent
                            }} />
                        );
                    })
                }
            </div>
        </Banner>
    );

};

export default StocksBanner;