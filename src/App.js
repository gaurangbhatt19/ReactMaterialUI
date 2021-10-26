// import { CounterComponent } from "./components/CounterComponent";
import "./styles.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
export default function App() {
  const [btn_color, set_btn_color] = useState(true);
  const [color, setColor] = useState("primary");

  function handleColor(btn_color) {
    if (btn_color) {
      setColor("primary");
    } else {
      setColor("secondary");
    }
  }
  return (
    <div className="App">
      {/* <CounterComponent /> */}
      {/* <Button color="primary" variant="contained">
        Material UI Button
      </Button>
      <Button color="secondary" variant="contained">
        Material UI Button
      </Button>
      <Button color="default" variant="contained">
        Material UI Button
      </Button>
      <Button color="primary" variant="contained" disabled>
        Material UI Button
      </Button> */}
      <Button color="primary" variant="outlined">
        Button
      </Button>
      <Button
        color={color}
        variant="contained"
        onClick={() => {
          handleColor(btn_color);
          set_btn_color(!btn_color);
        }}
      >
        Button
      </Button>
    </div>
  );
}
