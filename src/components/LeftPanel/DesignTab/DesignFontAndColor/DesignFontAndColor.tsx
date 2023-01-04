import React from "react";
import { Grid } from "@material-ui/core";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import { HexColorPicker } from "react-colorful";

const DesignFontAndColor = () => {
  const [openColorPicker, setOpenColorPicker] = React.useState<boolean>(false);
  const [color, setColor] = React.useState("#aabbcc");

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Font</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <label className="block">
          <select
            onChange={(evt) => {}}
            className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
          >
            <option style={{ fontWeight: "bold" }}>Arial</option>
            <option style={{ fontWeight: "bold" }}>Verdana</option>
            <option style={{ fontWeight: "bold" }}>Trebuchet MS</option>
            <option style={{ fontWeight: "bold" }}>Georgia</option>
            <option style={{ fontWeight: "bold" }}>Palatino</option>
            <option style={{ fontWeight: "bold" }}>Lucida Sans</option>
            <option style={{ fontWeight: "bold" }}>Times New Roman</option>
            <option style={{ fontWeight: "bold" }}>Corier New</option>
          </select>
        </label>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Font size</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <label className="block">
          <input className="form-range text-error" type="range" />
        </label>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Line spacing</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            0.5
          </button>
          <button
            style={{ width: "34%" }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            1.0
          </button>
          <button
            style={{ width: "33%" }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            2.0
          </button>
        </div>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Space from content</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            className="btn rounded-r-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            -
          </button>
          <button
            style={{ width: "34%" }}
            className="btn rounded-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            1
          </button>
          <button
            style={{ width: "33%" }}
            className="btn rounded-l-none bg-success/10 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            +
          </button>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Template Color</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "center" }}>
        <button
          style={{ backgroundColor: "#191C2B" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#48A1E5" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#6EB435" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#B4BA41" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#EE6A2F" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#AB332C" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#45668E" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          onClick={() => setOpenColorPicker(!openColorPicker)}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
          >
            <OpacityOutlinedIcon fontSize={"medium"} />
          </svg>
        </button>
        <div style={{ position: "absolute", zIndex: 5, marginLeft: "50px" }}>
          {openColorPicker && (
            <HexColorPicker color={color} onChange={setColor} />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default DesignFontAndColor;
