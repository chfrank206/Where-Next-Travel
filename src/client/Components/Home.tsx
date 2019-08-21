import * as React from 'react';


export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
            {/* Carousel for home page */}
            <div className="row">
            <div className="carousel-home d-flex col-12 justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/London.jpg" className="d-block w-100 carousel-height" alt="London" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>London</h5>
                                <p>The mighy Thames river bisects the city of London. Historically the river provided access to the oceans of the world.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Berlin.jpg" className="d-block w-100 carousel-height" alt="Berlin" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Berlin</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/Paris2.jpg" className="d-block w-100 carousel-height" alt="Paris" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Paris</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </div>
            
            <div className="card shadow my-2 mt-2 oswald-font text-theme-color text-center">
                <p className="m-2">We're still building our site, but you can get in touch with us at <span className="email-link-color">katiewherenexttravel@gmail.com</span>. Thank you for your interest!</p>
            </div>
            <div className="row container d-flex justify-content-center">
                <div className="col-md-12 oswald-font text-center text-theme-color">
                <i>"Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime." ~ Mark Twain</i>
                </div>
            </div>
            <div>
                <hr/>
            </div>
            <article className="container p-3">
                <h3 className="oswald-font text-theme-color">
                    Why should you travel with us?
                </h3>
                <p className="oswald-font text-theme-color">
                    Since I was in highshool I have wanted nothing more than to travel. I started my schools travel club and started what my mother calls a, "baby-sitting empire" to fund those travels. I never looked back once I boarded that first plane. The memories I have made abroad made me realize that  I want others to feel the way I did on that first take-off. That rush as the plane gathers speed never left me, and I want you to feel that way when you find those adventures for yourself. It is my calling to help you create those adventures. I want you to see new horizons!
                </p>
            </article>
        </>
    )

}


export default Home;
