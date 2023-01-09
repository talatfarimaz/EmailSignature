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
import { DetailsModel } from "../../../models/DetailsModel";
import { useSelector } from "react-redux";

const TemplateTab = () => {
  // @ts-ignore
  const test: DetailsModel[] = useSelector((state) => state.app.detailsData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h4 className="text-base font-semibold mt-3">FREE TEMPLATES</h4>
        <div style={{ height: "100px" }} />
        <h4 className="text-base font-semibold mt-3">PRO TEMPLATES</h4>
      </Grid>
    </Grid>
  );
};

export default TemplateTab;
