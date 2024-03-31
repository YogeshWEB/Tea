import logo from "./logo.png";
import mimage from "./main-image.png";
function App() {
  return (
    <div className="container">
      <div className="main">
        <div className="nav">
          <img src={logo} alt="logo" className="logo" />
          <div className="page">
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Testimonials</a>
            </p>
            <p>
              <a href="#">Contact Us</a>
            </p>
          </div>
          <div className="signup">Sign up</div>
        </div>
        <div className="main-content">
          <div className="heading">
            <h1 className="head-content">Tea Time Hub</h1>
          </div>
          <div className="para">
            <p className="para-content">
              From the rolling hills of Darjeeling to the lush gardens of Japan,
              our teas encapsulate the essence of their origins, offering a
              moment of tranquility in every sip.
            </p>
          </div>
          <div className="explore">Explore</div>
          <div className="image-container">
            <img src={mimage} alt="" className="image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
