import React from "react";
import Articles_rows from "./articles_rows.js";
import { news_data } from "./data.js";

const Articles = () => {
    return (

        <div className="container">
            <div className="heading" >top news from india</div>
         
            <Articles_rows 
                a={news_data[0]}
                b={news_data[1]}
                c={news_data[2]}
                     />
            <Articles_rows 
                a={news_data[3]}
                b={news_data[4]}
                c={news_data[5]}
            />
            <Articles_rows 
                a={news_data[6]}
                b={news_data[7]}
                c={news_data[8]}
            />
        </div>
    );
}
export default Articles;
