/** @format */

import { GetTrasnlate, GetLaunguages } from "../Service/GetAPI";
import { useState, useEffect } from "react";
import "../Styles/Display.css";
import Switch from "../../Assets/images.png";

const Display = () => {
  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [launguges, setLaunguages] = useState([]);
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("it");
  useEffect(() => {
    GetTrasnlate(text, source, target).then((res) => setData(res));
    GetLaunguages().then((res) => setLaunguages(res));
  }, [text, source, target]);
  return (
    <div className="container">
      <div className="Input">
        <p className="Title">
          Translate from{" "}
          <select value={source} onChange={(e) => setSource(e.target.value)}>
            {launguges.map((item) => (
              <option value={item.code}>{item.name}</option>
            ))}
          </select>
        </p>

        <textarea
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="SwitchBtn">
        <button
          onClick={() => {
            const temp = source;
            setSource(target);
            setTarget(temp);
            setText("");
            setData("");
          }}
        >
          <img width={"16px"} src={Switch} alt="switch" />
        </button>
      </div>
      <div className="Output">
        <p className="Title">
          Translate into{" "}
          <select value={target} onChange={(e) => setTarget(e.target.value)}>
            {launguges.map((item) => (
              <option value={item.code}>{item.name}</option>
            ))}
          </select>
        </p>

        <textarea disabled value={data?.translatedText} />
      </div>
    </div>
  );
};
export default Display;
