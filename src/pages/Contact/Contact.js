import React from "react";

export default function Contact() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">Contact page</h1>
                </div>
                <div className="col-12">
                    <section id="contact">
                        <ul>
                            <li className="phone">Phone number: +47 12 34 5678</li>
                            <li className="email">Epost: info@greatgames.no</li>
                            <li className="address">Elias Smiths vei 20B, 6017 Ålesund</li>
                            <li className="time">Opening hours:</li>
                            <li>Everyday: 08:00 - 20:00</li>
                        </ul>
                    </section>
                </div>
                {/*SoMe buttons have fake links */}
                <div className="col-12 d-flex justify-content-around mt-1">
                    <a href="https://www.facebook.com/pages/great-games" target="_blank">
                        <i className="fab fa-2x fa-facebook" color="#3b5998"></i>
                    </a>
                    <a href="https://www.instagram.com/great-games/"  target="_blank">
                        <i className="fab fa-2x fa-instagram" color=""></i>
                    </a>
                    <a href="https://twitter.com/great-games/" target="_blank">
                    <i className="fab fa-2x fa-twitter" color="#00aced"></i>
                    </a>
                </div>

            </div>
        </div>

    );
}