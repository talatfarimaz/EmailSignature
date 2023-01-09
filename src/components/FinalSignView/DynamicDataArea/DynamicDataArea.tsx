import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { DetailsModel } from "../../../models/DetailsModel";

const DynamicDataArea = () => {
  const ava2 = require("../../../assets/ava2.png");
  // @ts-ignore
  const test: DetailsModel[] = useSelector((state) => state.app.detailsData);

  return (
    <div className={"text-center mt-10"}>
      <h4 className="text-base font-semibold text-gray-300 m-auto">
        YOUR DESIGN TEMPLATE
      </h4>
      <div className="my-4 h-px  bg-slate-200 dark:bg-navy-500" />

      <Grid container spacing={1}>
        <Grid item xs={1}>
          <div className="avatar h-10 w-10">
            <img className="mask is-squircle" src={ava2} alt="avatar" />
            <div className="absolute right-0 -m-0.5 h-3 w-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent" />
          </div>
        </Grid>
        <Grid item xs={2} alignContent={"flex-start"} alignItems={"flex-start"}>
          {test.length !== 0 && (
            <>
              <h4 className="text-base text-left font-semibold text-black m-auto">
                {test[0]?.value !== "" ? test[0].value : ""}
              </h4>
              <h4 className="text-base text-left font-semibold text-gray-300 m-auto">
                {test[1]?.value !== "" ? test[1].value : ""}
              </h4>
              <h4 className="text-base text-left font-semibold text-warning m-auto">
                {test[2]?.value !== "" ? test[2].value : ""}
              </h4>
            </>
          )}
        </Grid>
        <Grid
          item
          xs={6}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        />
        <Grid item xs={3} alignContent={"flex-end"} alignItems={"flex-end"} />
        <Grid item xs={1} />
        <Grid item xs={11}>
          <Grid container>
            {test.length !== 0 &&
              test.slice(3, test.length).map((t) => {
                return (
                  t.value !== null &&
                  t.value !== "" && (
                    <Grid xs={4}>
                      <h4 className="text-base text-left font-semibold text-black m-auto mt-3">
                        {t.placeholder.toLocaleUpperCase()}
                      </h4>
                      <h4 className="text-base text-left font-semibold text-gray-300 m-auto mb-4">
                        {t.value}
                      </h4>
                    </Grid>
                  )
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DynamicDataArea;
