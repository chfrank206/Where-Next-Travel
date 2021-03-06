import * as React from "react";

export interface HomeProps { }

const Home: React.SFC<HomeProps> = () => {
  return (
    <>
      {/* Carousel for home page */}
      <div className="row">
        <div className="hero-image text-theme-color">
          <img className="hero-image" src="images/ParisHero.jpg" alt="Paris" />
        </div>
        <div className="hero-text">
          <h1>Hi! I'm Katie.</h1>
          <p>And I love to travel!</p>
          <button className="btn">Let me help you travel!</button>
        </div>
      </div>

      <div className="card shadow my-2 mt-2 oswald-font text-theme-color text-center">
        <p className="m-2">
          {" "}
          My site is still under construction, but you can get in touch with me
          at <span className="link-color">katiewherenexttravel@gmail.com</span>.
          Thank you for your interest!
        </p>
      </div>
      <div className="mt-3">
        <hr />
      </div>
      <div className="container">
        <div className="col-md-12 mx-auto oswald-font text-center text-theme-color">
          <i>
            "Travel is fatal to prejudice, bigotry, and narrow-mindedness, and
            many of our people need it sorely on these accounts. Broad,
            wholesome, charitable views of men and things cannot be acquired by
            vegetating in one little corner of the earth all one's lifetime." ~
            Mark Twain
          </i>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <article className="container p-3">
        <h3 className="oswald-font text-theme-color">
          Why should you travel with me?
        </h3>
        <p className="oswald-font text-theme-color">
          Since I was in highshool I have wanted nothing more than to travel. I
          started my schools travel club and started what my mother calls a,
          "baby-sitting empire" to fund those travels. I never looked back once
          I boarded that first plane. The memories I have made abroad made me
          realize that I want others to feel the way I did on that first
          take-off. That rush as the plane gathers speed never left me, and I
          want you to feel that way when you find those adventures for yourself.
          It is my calling to help you create those adventures. I want you to
          see new horizons!
        </p>
      </article>
      <hr />
      <article className="row">
        <div className="container col-md-12 d-flex justify-content-center align-middle">
          <h3 className="oswald-font text-theme-color ">
            How my process works:
          </h3>
          <ul className="list-group list-group-flush text-theme-color">
            <li className="list-group-item">
              Fill out the{" "}
              <span>
                <a
                  className="link-color"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0vzqbNPQ0FmBkn0fWJJm-_yv_SHUu-YU98X5BI8PmqTIY-Q/viewform"
                  target="_blank"
                >
                  travel form
                </a>
              </span>
              .
            </li>
            <li className="list-group-item">Let me get to know you more!</li>
            <li className="list-group-item">
              I customize your trip package to fit your specifactions.
            </li>
            <li className="list-group-item">
              Take off! You start your travels!
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Home;
