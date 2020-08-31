import React from "react";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <div>
      <p>
        This is {props.mama} and {props.papa} and their sons are
        {props.sons.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
        and her daughter is {props.daughter}. They live in calle
        {props.casa.calle} numero:
        {props.casa.numero}
      </p>
      <hr />
      {props.children}
    </div>
  );
};

export default Home;

//I use propTypes to make sure we always use the right variables.
//You can download and install the package from here: https://www.npmjs.com/package/prop-types
//If we use the wrong variable an error should pop on the console.
//".isRequire is a property that tells React that we absolutely need that prop"
Home.propTypes = {
  mama: PropTypes.string.isRequired,
  papa: PropTypes.string,
  sons: PropTypes.array,
  //When you pass an object as props you can't control it easily with PropTypes.
  //The variable values of the keys can change and pass undetected
  //We have to use the method shape() to control the variables of key-values
  casa: PropTypes.shape({
    calle: PropTypes.string,
    numero: PropTypes.number,
    vecinos: PropTypes.array,
    urbanizacion: PropTypes.string,
    distrito: PropTypes.string,
  }),
};

//".defaultProps" is allowing me to have a default prop in case there is none.
Home.defaultProps = {
  mama: "Te has olvidado el nombre de tu madre?",
};
