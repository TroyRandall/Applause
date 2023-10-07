import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { authenticate } from "../../store/session";

//firebase imports

import { Redirect } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../../firebase";

//static asset imports

=======
import { Redirect } from "react-router-dom";
>>>>>>> 3248a660 (truncated history)
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
<<<<<<< HEAD
  const [user, setUser ] = useState({})
=======
>>>>>>> 3248a660 (truncated history)

  useEffect(() => {
    function initSlideShow(slideshow) {
      var slides = document.querySelectorAll(
        `#${slideshow.id} [role="list"] .slide`
      );

      var index = 0,
        time = 3000;
      slides[index].classList.add("active");

      setInterval(() => {
        slides[index].classList.remove("active");

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add("active");
      }, time);
    }

    var slideshows = document.querySelectorAll('[data-component="slideshow"]');
    slideshows.forEach(initSlideShow);
  }, []);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    try {
      const data = await signInWithEmailAndPassword(auth,email, password)
      console.log(data.user.email);
      dispatch(authenticate(data.user.email))
    } catch (error) {
      setErrors(error)
    }


=======
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
>>>>>>> 3248a660 (truncated history)
  };

  return (
    <div id="log-in-container">
      <div id="slideshow-example" data-component="slideshow">
        <div role="list">
          <div className="slide">
            <img
              src={pic1}
              alt="an advertisement for applause using dark purple/blue with bright neon green and pink coloring"
              className="slideshow-image"
            />
          </div>
          <div className="slide">
            <img
              src={pic2}
              alt="an advertisement for applause using dark purple/blue with bright neon green and pink coloring"
              className="slideshow-image"
            />
          </div>
          <div className="slide">
            <img
              src={pic3}
              alt="an advertisement for applause using dark purple/blue with bright neon green and pink coloring"
              className="slideshow-image"
            />
          </div>
        </div>
      </div>
      <div id='log-in-form-container'>
      <h1 id='log-in-form-title'>Log In</h1>
      <p id="log-in-info">
        Please Input The Following Information To Log In...
      </p>
      <hr id="log-in-line-break" />

      <form onSubmit={handleSubmit} id='log-in-form'>
        {/* <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul> */}
        <div className='log-in-form-item'>
        <label className = 'log-in-form-labels'>Email </label>
        <input
        className='log-in-form-inputs'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /></div>
        <div className='log-in-form-item'>
        <label className = 'log-in-form-labels'>Password</label>
        <input
        className='log-in-form-inputs'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /></div>

        <button type="submit" id='log-in-form-submit'>Log In</button>
      </form>
      <hr id='log-in-line-break'/>
      <h2 id='log-in-purpose-statement-title'>Applause Purpose Statement</h2>
            <p id='log-in-purpose-statement'>Here at Applause we are dedicated to one thing, the true joy that music brings where ever it goes. Much like many of you, music inspires us. It has been apart of the history of this world for as long as we have records. The legacy of music is deep in the roots of humanity, and with it comes a longing for an ever changing sound. It is our simple aim to be a conduit for the joy and inspiration that music continues to inspire across the generations that are soon to come, and the sounds that will soon come with them.</p>
            <hr id='log-in-line-break'/>
      </div>
    </div>
  );
}

export default LoginFormPage;
