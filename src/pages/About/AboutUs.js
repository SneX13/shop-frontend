import React from "react";

export default function AboutUs() {


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">About us</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {/*todo add team image*/}
                        <img src="https://picsum.photos/id/390/300?grayscale" className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        {/*todo add meaningful content */}
                        <h3>Team</h3>
                        <p>Cupcake ipsum dolor sit amet. Candy tootsie roll toffee cake caramels caramels. Chocolate
                            cake gummies I love biscuit halvah. Oat cake candy canes I love. Gummi bears chocolate bar
                            bonbon I love dessert danish. I love chupa chups cake apple pie chocolate. Tiramisu macaroon
                            sweet roll biscuit croissant. Marzipan marzipan liquorice. Gummi bears gummies gingerbread I
                            love. Tart cake wafer. Caramels wafer liquorice jelly-o tootsie roll lollipop. Tart powder
                            pie caramels jujubes marzipan soufflé.</p>
                        <h3>History</h3>
                        <p>Gummi bears topping sweet. Macaroon gummi bears dragée tart chocolate cake soufflé. Dragée I
                            love lemon drops macaroon. Dessert cotton candy I love sweet I love jelly croissant.
                            Chocolate cake powder danish soufflé lemon drops I love I love. Dessert gummi bears jelly
                            beans apple pie I love fruitcake pudding lollipop chocolate bar. Macaroon toffee donut
                            gummies pie muffin dessert. Candy liquorice apple pie sugar plum powder pie biscuit. Pie
                            danish I love I love. Tart tart cookie chocolate cake soufflé croissant. Cookie apple pie
                            pie I love oat cake chocolate cake dragée marshmallow I love. Liquorice soufflé I love
                            macaroon marshmallow bear claw ice cream carrot cake.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}