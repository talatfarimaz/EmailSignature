import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { SocialsElements } from "../../../constants/SocialsElements";
import { ReactSortable } from "react-sortablejs";
import { SocialsModel } from "../../../models/SocialsModel";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import DesignFontAndColor from "./DesignFontAndColor/DesignFontAndColor";
import DesignImages from "./DesignImages/DesignImages";

const DesignTab = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4 className="text-base font-semibold mt-3">FONT & COLOR</h4>
        <DesignFontAndColor />
        <h4 className="text-base font-semibold mt-8">IMAGES</h4>
        <DesignImages />
      </Grid>
    </Grid>
  );
};

export default DesignTab;
