import Article from "./article.js";


const Articles_rows = ({a,b,c}) => {
    console.log(a);
    console.log("abc");
    return (

        <>
            <div class="row row_container " >
                <Article
                    article={a}
                />
                <Article
                    article={b}
                />
                <Article
                    article={c}
                />
                            </div>
        </>
    );
};
export default Articles_rows;