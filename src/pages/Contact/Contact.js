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
                            {/*todo add correct domain for email*/}
                            <li className="email">Epost: info@boardgames.no</li>
                            <li className="address">Elias Smiths vei 20B, 6017 Ålesund</li>
                            <li className="time">Opening hours:</li>
                            <li>Everyday: 08:00 - 20:00</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    );
}