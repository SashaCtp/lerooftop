import React from "react";

type Props = {
    variation: number;
}

const StockPriceVariation = (props: Props) => {

    let style = 'negative';
    if (props.variation >= 0)
        style = 'positive';

    return (
        <div className={"stock-variation " + style + "-variation"}>
            <div className="variation-triangle"></div>
            <div className="variation-text">{Math.abs(props.variation).toFixed(2)}%</div>
        </div>
    );
};

export default StockPriceVariation;