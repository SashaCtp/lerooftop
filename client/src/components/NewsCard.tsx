import React, { useEffect, useState } from "react";
import ArticleData from "../models/ArticleData";
import Article from "./Article";
import Card from "./Card";

const NewsCard = () => {

    const MOCK_ARTICLES = [
        {
            "source": {
                "id": null,
                "name": "BFMTV"
            },
            "author": null,
            "title": "EN DIRECT - Guerre en Ukraine: Macron juge nécessaires \"de nouvelles discussions\" avec Kiev - BFMTV",
            "description": "La Russie a proposé d'instaurer un couloir humanitaire pour évacuer les civils réfugiés dans une usine de Severodonetsk, ville clef du Donbass que se disputent Russes et Ukrainiens dans une bataille particulièrement destructrice, avec bombardements incessants…",
            "url": "https://www.bfmtv.com/international/en-direct-guerre-en-ukraine-moscou-propose-un-couloir-humanitaire-pour-les-civils-de-severodonetsk-macron-en-roumanie_LN-202206150026.html",
            "urlToImage": "https://images.bfmtv.com/56d9V51ev9aPfeuOmv8mN-q2SIE=/0x0:1920x1080/1920x0/images/Emmanuel-Macron-en-visite-sur-une-base-de-l-Otan-en-Roumanie-1432086.jpg",
            "publishedAt": "2022-06-15T10:20:36Z",
            "content": "Dans le point d'étape quotidien concernant la guerre en Ukraine, le service de renseignement du ministère de la Défense britannique a assuré que les forces russes contrôlaient maintenant la majorité … [+1077 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Charles-Edouard Ama Koffi",
            "title": "Législatives 2022 en direct : Jean-Luc Mélenchon dénonce à nouveau le « mépris » d'Emmanuel Macron ; le chef de l'Etat « assume » ses déplacements en Roumanie et en Moldavie - Le Monde",
            "description": "« Je lui confirme : oui, c’est du mépris d’avoir prévu d’être trois jours hors de France entre les deux tours de l’élection qui va fixer la politique de notre pays », a répondu Jean-Luc Mélenchon ce matin.",
            "url": "https://www.lemonde.fr/politique/live/2022/06/15/legislatives-2022-en-direct-emmanuel-macron-assume-ses-deplacements-en-roumanie-et-en-moldavie-malgre-les-critiques-de-jean-luc-melenchon_6130364_823448.html",
            "urlToImage": "https://img.lemde.fr/2022/06/14/464/0/5568/2784/1440/720/60/0/c0422f1_5458968-01-06.jpg",
            "publishedAt": "2022-06-15T10:05:40Z",
            "content": "Le premier secrétaire du Parti socialiste (PS), Olivier Faure, candidat dans la 11e circonscription de Seine-et-Marne, a critiqué sur France Inter, mardi matin, la prise de position dEmmanuel Macron … [+2803 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Margherita Nasi et Alice Raybaud",
            "title": "Bac de philo 2022 : retrouvez les corrigés des sujets de l'épreuve - Le Monde",
            "description": "Plus de 520 000 élèves ont planché, ce mercredi 15 juin, sur la philosophie, la seule épreuve commune du bac pour les élèves de terminale. A cette occasion, « Le Monde » vous propose un tchat autour des sujets, ainsi que des corrigés des dissertations et de l…",
            "url": "https://www.lemonde.fr/campus/live/2022/06/15/bac-de-philo-2022-retrouvez-les-corriges-des-sujets-de-l-epreuve_6130362_4401467.html",
            "urlToImage": "https://img.lemde.fr/2022/06/15/588/0/4128/2064/1440/720/60/0/e30324f_1655287481244-image0.jpeg",
            "publishedAt": "2022-06-15T10:03:45Z",
            "content": "A loccasion de lépreuve écrite de philosophie du bac, mercredi 15 juin 2022, Le Monde organise un direct à partir de 7 h 30.\r\nNous serons devant des lycées franciliens pour recueillir les réactions d… [+1195 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "jeuxvideo.com"
            },
            "author": "Durvil_Amegeek",
            "title": "Des stocks de PS5 viennent d'apparaître : il n'y en aura pas pour tout le monde ! - jeuxvideo.com",
            "description": "Grâce aux nombreux réassorts, la PS5 prend sa place dans de nombreux foyers. Cependant, on reste toujours loin d'avoir des stocks qui tiennent dans le temps pour le produit le plus recherché de France en ce moment ! Si vous tombez sur cet article, c'est qu'il…",
            "url": "https://www.jeuxvideo.com/news/1578934/des-stocks-de-ps5-viennent-d-apparaitre-il-n-y-en-aura-pas-pour-tout-le-monde.htm",
            "urlToImage": "https://image.jeuxvideo.com/medias-md/165349/1653492737-175-card.png",
            "publishedAt": "2022-06-15T09:37:36Z",
            "content": "Grâce aux nombreux réassorts, la PS5 prend sa place dans de nombreux foyers. Cependant, on reste toujours loin d'avoir des stocks qui tiennent dans le temps pour le produit le plus recherché de Franc… [+7780 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Arnaud Leparmentier",
            "title": "La galaxie bitcoin s'effondre dans le sillage de la Bourse - Le Monde",
            "description": "La forte inflation et les menaces de récession entraînent dans la tourmente tout l’écosystème des cryptomonnaies.",
            "url": "https://www.lemonde.fr/economie/article/2022/06/15/la-galaxie-bitcoin-s-effondre-dans-le-sillage-de-la-bourse_6130405_3234.html",
            "urlToImage": "https://img.lemde.fr/2022/06/15/1/0/3500/2333/1440/960/60/0/d25c344_1655279534951-8b16918-1655226606604-244116.jpg",
            "publishedAt": "2022-06-15T09:07:21Z",
            "content": "Lors de la ruée vers lor en Californie, en 1849, les rares à faire fortune furent les marchands de pelles et de pioches et la Wells Fargo, qui conservait lor des prospecteurs. Pour les cryptodevises,… [+2889 chars]"
        },
    ]
    
    const API_BASE_URL = 'http://localhost:3000/dsqds';
    const [articles, setArticles] = useState(MOCK_ARTICLES);
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