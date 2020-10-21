import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function RenderPropsCallApi(props) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setIsChecked(true);
    });
    return () => {
      setIsChecked(false);
    };
  }, []);
  return (
    <div>{props.children(isChecked)}</div>
    // <div className="">
    //   {!isChecked ? <div className="loader hookComponent"></div> : "oke"}
    // </div>
  );
}

export default RenderPropsCallApi;
