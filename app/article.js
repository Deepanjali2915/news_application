const Article = ({article}) => {
    console.log("123");
    console.log(article);
    console.log("xyz");
    return (
        <>
            <div class="box col-sm-4 ">
                <div class="plan-title"><img class="plan-title" src={article.photo} /></div>
                <div class="plan-price">{article.heading}</div>
                <div class="description">{article.artical}</div>
                <div class="fullartical" >Read full artical
                    <button class="plan-button"><img src="arrow.png" /></button></div>
            </div>

        </>
    );
};
export default Article;