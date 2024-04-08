const Article = (props) => {
    return (
        <>
            <div class="box col-sm-4 ">
                <div class="plan-title"><img class="plan-title" src={props.photo} /></div>
                <div class="plan-price">{props.heading}</div>
                <div class="description">{props.artical}</div>
                <div class="fullartical" >Read full artical
                    <button class="plan-button"><img src="arrow.png" /></button></div>
            </div>

        </>
    );
};
export default Article;