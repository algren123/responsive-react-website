import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>This is what we provide</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./trainer.jpg"
                        text="Personal Training"
                        label="1-to-1 Sessions"
                        path="/"
                        />
                        <CardItem 
                        src="./trainer2.jpg"
                        text="Professional Advice"
                        label="Available Now"
                        path="/"
                        />
                        <CardItem 
                        src="./protein.jpg"
                        text="Supplement Products"
                        label="Natural"
                        path="/"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="./trainer3.jpg"
                        text="Price points for all customers"
                        label="Our Pricing"
                        path="/"
                        />
                        <CardItem 
                        src="./contact.jpg"
                        text="Our lines are open 24/7"
                        label="Contact Us"
                        path="/"
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
