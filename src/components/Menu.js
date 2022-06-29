import './Menu.css';
import React from 'react';


function Menu(props) {

        function buy(ftitle, fimg) {
            let allcard = document.getElementById("allcard");
            let display = document.getElementById("buy");
            let span = document.getElementById("productname")
            let image = document.getElementById("productimage")
            allcard.classList.add("hidden");
            display.classList.remove("hidden")
            span.textContent = "Vous avez commandé le repas " + ftitle;
            image.src = fimg;
        }

        function changeTitle(index){
            let title = document.getElementsByClassName("hovertitle");
                title[index].classList.remove("purple");
                title[index-1].classList.add("purple");
        }

        function resetTitle(){
            let title = document.getElementsByClassName("hovertitle");
            for (let i = 0; title[i] != null; i++)
                title[i].classList.remove("purple");
        }

        return (
                <div class="">
                    <div id="buy" className="hidden mt-5 d-flex justify-content-center flex-column">
                        <span className="police success" id="productname"></span>
                        <img className=" mt-5 d-flex align-self-center" id="productimage" src="" height="250" width="330"></img>
                    </div>
                    <div className="mt-5 d-flex flex-wrap" id="allcard">
                        {(props.filter != "" ? props.foods.filter(foodnf => foodnf.type == props.filter) : props.foods).map(food => 
                        <div className="card mt-5 me-5 test" style={{ width: '15rem' }} key={food.index}>
                            <span className="badge rounded-pill text-bg-light pill"><span className="fa fa-star checked"></span>{food.rating ? food.rating : null} ({food.reviews ? food.reviews : null})</span>
                            <img onMouseEnter={() => changeTitle(food.id)} onMouseLeave={() => resetTitle()}  widht="286" height="191" src={food.imageSrc ? food.imageSrc : null} className="card-img-top" alt="..." />
                                <button className="button" onClick={() => buy(food.title, food.imageSrc)}>Commander</button>
                                <div className="card-body">
                                    <h5 className="police card-title fw-bold text-dark title hovertitle">{food.title ? food.title : "Rien"}</h5>
                                    <p className="police card-text">{food.content ? food.content : "Rien"}</p>
                                    <p className="police card-text fw-bold text-dark">{food.price ? food.price : "Rien"}</p>
                                </div>
                        </div>)}
                    </div>
                </div>
        )
}

export default Menu;
