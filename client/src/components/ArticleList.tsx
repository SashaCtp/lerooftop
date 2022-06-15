import React from "react";
import ArticleData from "../models/ArticleData";
import Article from "./Article";
import Loader from "./Loader";

type Props = {
    articles: ArticleData[],
    loaded: boolean
}

const ArticleList = (props: Props) => {

    if (props.articles.length == 0 && !props.loaded)
        return (<Loader text="Loading articles ..." />);

    if (props.articles.length == 0 && props.loaded)
        return (<div>No article found</div>);

    return (
        <div className="articles">
            {
                props.articles.map((article: ArticleData, index, arr) => {
                    return (
                        <Article article={article} key={index} />
                    )
                })
            }
        </div>
    );

}

export default ArticleList;