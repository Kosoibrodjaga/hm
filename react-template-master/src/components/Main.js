import React from "react";
import dataButtons from "../databuttons";
import Button from "./Buttons";
import dataCard from "../datacards";
import CardOfProduct from "./Cards";


function Main() {
    let listOfCards = dataCard.map((card, idx) => {
        return( <CardOfProduct key={idx} datacard={card} />)
     })

    let listOfButtons = dataButtons.map((button, idx) => {
        return( <Button key={idx} button={button} />)
    })

    return (
        <div>
        <h1>Тату машинки</h1>
           <div className="button-wrapper">{listOfButtons}</div>
        <div className="card-wrapper">
            {listOfCards}
        </div>
        </div>
    )
}

export default Main;