import React from "react";
import ArticleData from "../../models/ArticleData";

import './article.css';

type Props = {
    article: ArticleData
}

const Article =  (props: Props) => {

    return (
        <a href={props.article.url} className="articleLink" target="_blank">
            <div className="article">
                <div className="mediaName">{ props.article.source.name }</div>
                <div className="aside">
                    <img src={props.article.urlToImage} className='thumbnail'/>
                </div>
                <div className="content">
                    <h3>{ props.article.title }</h3>
                </div>
            </div>
        </a>
    );

}

export default Article;