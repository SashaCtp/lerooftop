import Source from "./Source";

type ArticleData = {
    source: Source,
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export default ArticleData;