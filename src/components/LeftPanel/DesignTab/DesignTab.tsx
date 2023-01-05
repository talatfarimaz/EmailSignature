import React from "react";
import { Grid } from "@material-ui/core";
import DesignFontAndColor from "./DesignFontAndColor/DesignFontAndColor";
import DesignImages from "./DesignImages/DesignImages";
import DesignDetails from "./DesignDetails/DesignDetails";

const DesignTab = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4 className="text-base font-semibold mt-3">FONT & COLOR</h4>
        <DesignFontAndColor />
        <h4 className="text-base font-semibold mt-8">IMAGES</h4>
        <DesignImages />
        <h4 className="text-base font-semibold mt-8">DETAILS</h4>
        <DesignDetails />
      </Grid>
    </Grid>
  );
};

export default DesignTab;
