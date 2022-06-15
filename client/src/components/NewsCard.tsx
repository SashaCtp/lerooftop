import React, { useEffect, useState } from "react";
import ArticleData from "../models/ArticleData";
import Article from "./Article";
import Card from "./Card";

const NewsCard = () => {
    
    const API_BASE_URL = 'http://localhost:3000/';
    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState('fr');

    useEffect(() => {
        fetch(`${API_BASE_URL}api/news/top-headlines?country=${country}`)
        .then(res => res.json())
        .then(data => {
            
            let articlesCount = Math.min(data.totalResults, 5);
            setArticles(data.articles.slice(0, articlesCount));

        })
        .catch(err => {
            console.error(err);
        });
    }, [country]);

    return (
        <Card icon='📰' title='News'>

            <select value={country} onChange={(event: any) => {
                setCountry(event.target.value);
            }}>
                <option value={'fr'}>France</option>
                <option value={'ru'}>Russia</option>
                <option value={'gb'}>Greate Britain</option>
                <option value={'us'}>USA</option>
            </select>

            {
                articles.map((article: ArticleData, index, arr) => {
                    return (
                        <Article article={article} key={index} />
                    )  
                })
            }

        </Card>
    );

}

export default NewsCard;