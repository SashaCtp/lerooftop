import React from "react";
import StockData from "../../models/StockData";
import StockPriceVariation from "./StockPriceVariation";

type Props = {
    stock: StockData
}

const Stock = (props: Props) => {
    return (
        <div className="stock">
            <div className="symbol">
                { props.stock.symbol }
            </div>
            <div className="price">
                ${ props.stock.regularMarketPrice.toFixed(2) }
            </div>
            <StockPriceVariation variation={props.stock.regularMarketChangePercent} />
        </div>
    );
};

export default Stock;