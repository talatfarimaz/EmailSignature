import React from "react";
import { Grid } from "@material-ui/core";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import InputIcon from "@material-ui/icons/Input";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";
import RemoveRedEyeSharpIcon from "@material-ui/icons/RemoveRedEyeSharp";

const DesignDetails = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Fill</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "25%" }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            Phone
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            P
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CallOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            None
          </button>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Shape</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "50%" }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <InputIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "50%" }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <SystemUpdateAltOutlinedIcon fontSize={"small"} />
          </button>
        </div>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Seperator</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "25%" }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            I
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <FiberManualRecordIcon style={{ width: "12px", height: "12px" }} />
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <StopIcon style={{ width: "12px", height: "12px" }} />
          </button>
          <button
            style={{ width: "25%" }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            None
          </button>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">
          Match labels with template color
        </h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "center" }}>
        <button
          style={{ backgroundColor: "#000000" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#1c1c1c" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#2d2d2d" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#626262" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#9a9a9a" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#c9c9c9" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#e0e0e0" }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{
            backgroundColor: "#ffffff",
            borderColor: "gray",
            border: "1px solid gray",
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Text color</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "left" }}>
        <div className="flex -space-x-px w-100">
          <label className="inline-flex items-center space-x-2">
            <input
              className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
              type="checkbox"
            />
          </label>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light m-auto">Optimize for mobile</h5>
        {/*
        <RemoveRedEyeSharpIcon fontSize={"small"} color={"secondary"} />
*/}
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "left" }}>
        <div className="flex -space-x-px w-100">
          <label className="inline-flex items-center space-x-2">
            <input
              className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
              type="checkbox"
            />
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default DesignDetails;
