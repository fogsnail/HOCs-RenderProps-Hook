import React, { useState, useEffect } from "react";
import "./App.css";
import HookCallApi from "./components/HookCallApi";
import RenderPropsCallApi from "./components/RenderPropsCallApi";
import HocsCallApi from "./components/HocsCallApi";

function App() {
  function RenderApi(props) {
    return (
      <div>
        {!props.checked ? (
          <div className="loader hookComponent"></div>
        ) : (
          "Connected"
        )}
      </div>
    );
  }

  // useEffect(() => {
  //   return () => {
  //     setOpenHocsCallApi(false);
  //     setOpenHookCallApi(false);
  //     setOpenRenderPropsCallApi(false);
  //   };
  // });

  const url = "https://api.github.com/users/farskid/repos";
  const ComponentWithHocsCallApi = HocsCallApi(RenderApi, url);
  const [openHookCallApi, setOpenHookCallApi] = useState(false);
  const [openRenderPropsCallApi, setOpenRenderPropsCallApi] = useState(false);
  const [openHocsCallApi, setOpenHocsCallApi] = useState(false);

  return (
    <div className="App ">
      {/* Call API by HOCs */}
      <div className="item">
        <button
          className="button"
          onClick={() => {
            setOpenHocsCallApi(true);
            setOpenHookCallApi(false);
            setOpenRenderPropsCallApi(false);
          }}
        >
          Call API by HOCs
        </button>
        {openHocsCallApi ? <ComponentWithHocsCallApi /> : ""}
      </div>

      {/* Call API by Render Props */}
      <div className="item">
        <button
          className="button"
          onClick={() => {
            setOpenRenderPropsCallApi(true);
            setOpenHocsCallApi(false);
            setOpenHookCallApi(false);
          }}
        >
          Call API by Render Props
        </button>
        {openRenderPropsCallApi ? (
          <RenderPropsCallApi url={url}>
            {(isChecked) =>
              !isChecked ? (
                <div className="loader hookComponent"></div>
              ) : (
                "Connected"
              )
            }
          </RenderPropsCallApi>
        ) : (
          ""
        )}
      </div>

      {/* Call API by Hook */}
      <div className="item">
        <button
          className="button"
          onClick={() => {
            setOpenHookCallApi(true);
            setOpenHocsCallApi(false);
            setOpenRenderPropsCallApi(false);
          }}
        >
          Call API by Hook
        </button>
        {openHookCallApi ? <HookCallApi /> : ""}
      </div>
    </div>
  );
}
export default App;
