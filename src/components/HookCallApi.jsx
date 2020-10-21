import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

HookCallApi.propTypes = {};

function HookCallApi(props) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    axios.get("https://api.github.com/users/farskid/repos").then((res) => {
      setIsChecked(true);
    });
    return () => {
      setIsChecked(false);
    };
  }, []);
  return (
    <div className="">
      {!isChecked ? <div className="loader hookComponent"></div> : "Connected"}
    </div>
  );
}

export default HookCallApi;
