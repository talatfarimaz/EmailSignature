import React from "react";
import { Grid } from "@material-ui/core";
import DesignFontAndColor from "./DesignFontAndColor/DesignFontAndColor";
import DesignImages from "./DesignImages/DesignImages";
import DesignDetails from "./DesignDetails/DesignDetails";
import SocialIcons from "./SocialIcons/SocialIcons";
import DecorativeLine from "./DecorativeLine/DecorativeLine";

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
        <h4 className="text-base text-white mt-3">Social icons</h4>
        <SocialIcons />
        <h4 className="text-base text-white mt-3">Decorative line</h4>
        <DecorativeLine />
      </Grid>
    </Grid>
  );
};

export default DesignTab;
