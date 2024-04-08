import Article from "./article.js";
import { news_Data } from "./data.js";
const Articles_rows = () => {
    return (
        <>
            <div class="row row_container " >

                <Article
                    photo={news_Data[0].photo}
                    heading={news_Data[0].heading}
                    artical={news_Data[0].artical}
                    url={news_Data[0].url}
                />
                <Article
                    photo={news_Data[1].photo}
                    heading={news_Data[1].heading}
                    artical={news_Data[1].artical}
                    url={news_Data[1].url}
                />
                <Article
                    photo={news_Data[2].photo}
                    heading={news_Data[2].heading}
                    artical={news_Data[2].artical}
                    url={news_Data[2].url}
                />
                </div>
                <div class="row row_container " >
                <Article
                    photo={news_Data[3].photo}
                    heading={news_Data[3].heading}
                    artical={news_Data[3].artical}
                    url={news_Data[3].url}
                />
                <Article
                    photo={news_Data[4].photo}
                    heading={news_Data[4].heading}
                    artical={news_Data[4].artical}
                    url={news_Data[4].url}
                />
                <Article
                    photo={news_Data[5].photo}
                    heading={news_Data[5].heading}
                    artical={news_Data[5].artical}
                    url={news_Data[5].url}
                />
                </div>
                <div class="row row_container " >
                <Article
                    photo={news_Data[6].photo}
                    heading={news_Data[6].heading}
                    artical={news_Data[6].artical}
                    url={news_Data[6].url}
                />
                <Article
                    photo={news_Data[7].photo}
                    heading={news_Data[7].heading}
                    artical={news_Data[7].artical}
                    url={news_Data[7].url}
                /><Article
                    photo={news_Data[8].photo}
                    heading={news_Data[8].heading}
                    artical={news_Data[8].artical}
                    url={news_Data[8].url}
                />
                </div>

            {/* </div> */}

        </>
    );
};
export default Articles_rows;