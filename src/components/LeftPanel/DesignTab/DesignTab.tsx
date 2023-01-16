import React from "react";
import { Grid } from "@material-ui/core";
import DesignFontAndColor from "./DesignFontAndColor/DesignFontAndColor";
import DesignImages from "./DesignImages/DesignImages";
import DesignDetails from "./DesignDetails/DesignDetails";

const DesignTab = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4 className="text-base text-white mt-3">Font & Color</h4>
        <DesignFontAndColor />
        <h4 className="text-base text-white mt-3">Images</h4>
        <DesignImages />
        <h4 className="text-base text-white mt-3">Details</h4>
        <DesignDetails />
      </Grid>
    </Grid>
  );
};

export default DesignTab;
