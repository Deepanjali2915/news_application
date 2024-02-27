const Search = () => {
    return (
        <div className="input-group">
            <div className="form-outline">
                <div><img src="Frame 15.png"/></div>
                <input type="search" className="search" placeholder="Search" />    
            </div>
            <button className="form-label" >GO</button>
        </div>
    );
};
export default Search;


.input-group {
    justify-content: center;
    margin-top: 51px;
}

.form-outline {
    height: 60px;
    border: 2px solid gray;
    display: flex;
    flex-direction: row;

}

.search {
    height: 55px;
    border: none;
    width: 267px;
    color: #3C3030;
    font-family: "Iowan Old Style";
    font-size: 20px;
    font-weight: 400;
    /* padding-left: 30px; */
}

.form-outline img {
    width: 32px;
    margin-top: 15px;
    height: 32px;
}

.form-label {
    background-color: red;
    border-radius: 1px;
    width: 62px;
    height: 60px;
    border: none;
    color: #FDFDFA;
    font-family: "Iowan Old Style";
    font-size: 20px;
    font-weight: 400;
}
