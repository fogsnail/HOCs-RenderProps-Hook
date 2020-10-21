import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function (Component, url) {
  return function (props) {
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
      axios.get(url).then((res) => {
        setIsChecked(true);
      });
      return () => {
        setIsChecked(false);
      };
    }, []);
    return (
      <div className="">
        <Component checked={isChecked} />
        {/* {!isChecked ? <div className="loader hookComponent"></div> : "oke"} */}
      </div>
    );
  };
}
