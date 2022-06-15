import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import Card from "../Card/Card";

const NewsCard = () => {
    
    const API_BASE_URL = 'http://localhost:3000/';
    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState('fr');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setArticles([]);
        fetch(`${API_BASE_URL}api/news/top-headlines?country=${country}`)
        .then(res => res.json())
        .then(data => {
            
            let articlesCount = Math.min(data.totalResults, 5);
            setTimeout(() => {
                setArticles(data.articles.slice(0, articlesCount));
                setLoaded(true);
            }, 2000)
            

        })
        .catch(err => {
            console.error(err);
            setLoaded(true);
        });
    }, [country]);

    return (
        <Card icon='📰' title='News'>

            <div className="selectCountry">
                <select value={country} onChange={(event: any) => {
                    setCountry(event.target.value);
                }}>
                    <option value={'fr'}>France</option>
                    <option value={'ru'}>Russia</option>
                    <option value={'gb'}>Great Britain</option>
                    <option value={'us'}>USA</option>
                </select>
            </div>
            
            <ArticleList articles={articles} loaded={loaded} />

        </Card>
    );

}

export default NewsCard;