import React from "react";
import { Grid } from "@material-ui/core";

const DesignImages = () => {
  const [openColorPicker, setOpenColorPicker] = React.useState<boolean>(false);
  const [color, setColor] = React.useState("#aabbcc");

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Shape</h5>
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
        <h5 className="text-base font-light">Size</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <label className="block">
          <input className="form-range text-error" type="range" />
        </label>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-base font-light">Position</h5>
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
        <h5 className="text-base font-light">Image link</h5>
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
    </Grid>
  );
};

export default DesignImages;
