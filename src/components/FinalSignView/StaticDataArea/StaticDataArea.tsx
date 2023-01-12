import React from "react";
import moment from "moment";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const StaticDataArea = () => {
  const ava1 = require("../../../assets/ava1.jpg");
  const ava2 = require("../../../assets/ava2.png");
  // @ts-ignore
  const photo = useSelector((state) => state.app.photoData);

  return (
    <div className={"text-left"}>
      <h6 className="text-sm" style={{ color: "#BBB5F5" }}>
        {"Today, " + moment().format("MMMM Do YYYY, h:mm a")}
      </h6>
      <h1 className="text-4xl font-semibold text-black mb-10">
        Meeting with new investor
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <div className="flex h-8 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 p-0.5">
            <div className="avatar h-full w-full rounded-full bg-white p-[3px] dark:bg-navy-700">
              <img className="rounded-full" src={ava1} alt="avatar" />
            </div>
          </div>
        </Grid>
        <Grid item xs={2} alignContent={"flex-start"} alignItems={"flex-start"}>
          <h4 className="text-base font-semibold text-black m-auto">
            Joel Kenew
          </h4>
        </Grid>
        <Grid item xs={6} alignContent={"flex-start"} alignItems={"flex-start"}>
          <h4 className="text-base font-semibold text-gray-300 m-auto">
            -Hi, I have a new meeting opportunity...
          </h4>
        </Grid>
        <Grid item xs={3} alignContent={"flex-end"} alignItems={"flex-end"}>
          <h4 className="text-base font-semibold text-gray-300 m-auto">
            {moment().format("MMM Do YYYY, h:mm a")}
          </h4>
        </Grid>
      </Grid>
      <div className="my-4 h-px  bg-slate-200 dark:bg-navy-500" />
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <div className="avatar h-8 w-8">
            <img
              className="rounded-full"
              src={photo !== null && photo !== "#" ? photo : ava2}
              alt="avatar"
            />
            <div className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-error dark:border-navy-700" />
          </div>
        </Grid>
        <Grid item xs={2} alignContent={"flex-start"} alignItems={"flex-start"}>
          <h4 className="text-base font-semibold text-black m-auto">You</h4>
        </Grid>
        <Grid
          item
          xs={6}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        />
        <Grid item xs={3} alignContent={"flex-end"} alignItems={"flex-end"}>
          <h4 className="text-base font-semibold text-gray-300 m-auto">
            {moment().format("MMM Do YYYY, h:mm a")}
          </h4>
        </Grid>
        <Grid item xs={12}>
          <h5 className="text-base mb-3">Hey Joel,</h5>
          <h5 className="text-base mb-1">
            Here you have more information about the conference and meeting on
            the link
          </h5>
          <a href="https://www.w3schools.com" style={{ color: "#A89FF3" }}>
            https://www.w3schools.com
          </a>
          <h5 className="text-base mt-3">Regards,</h5>
        </Grid>
      </Grid>
    </div>
  );
};

export default StaticDataArea;
