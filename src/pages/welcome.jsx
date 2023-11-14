import React from 'react';
import Nav from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Card from "../components/Card"
import spinaci from "../assets/pizzas/spinaci.jpg";
import funghi from "../assets/pizzas/funghi.jpg";
import foc from "../assets/pizzas/focaccia.jpg";

const Welcome = () => {
    return (
        <>
            <>
                <Nav />
                <Home />
                <div className="card">
                    <Card photo={spinaci} name="spinaci" price={20} />
                    <Card photo={funghi} name="funghi" price={10} />
                    <Card photo={foc} name="focaccia" price={5} />
                </div>

                <Footer />
            </>
            );
        </>
    )
}
export default Welcome