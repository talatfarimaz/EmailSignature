import React from "react";
import { Grid } from "@material-ui/core";
import CropDinOutlinedIcon from "@material-ui/icons/CropDinOutlined";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import VerticalAlignTopOutlinedIcon from "@material-ui/icons/VerticalAlignTopOutlined";
import VerticalAlignBottomOutlinedIcon from "@material-ui/icons/VerticalAlignBottomOutlined";
import VerticalAlignCenterOutlinedIcon from "@material-ui/icons/VerticalAlignCenterOutlined";
import DesignTabStyle from "../../../../styles/DesignTabStyle";
import { useDispatch } from "react-redux";
import { ImageShapeType } from "../../../../constants/ImageShapeType";
import { ImageLocationType } from "../../../../constants/ImageLocationType";

const DesignImages = () => {
  const classes = DesignTabStyle();
  const dispatch = useDispatch();

  const onChangeImageShape = (shape: number) => {
    dispatch({
      type: "CHANGE_IMAGE_SHAPE",
      payload: shape,
    });
  };

  const onChangeImageSize = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_IMAGE_SIZE",
      payload: evt.target.value,
    });
  };

  const onChangeImageLocation = (location: number) => {
    dispatch({
      type: "CHANGE_IMAGE_LOCATION",
      payload: location,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Shape</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeImageShape(ImageShapeType.ELLIPSE);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CropDinOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "34%" }}
            onClick={() => {
              onChangeImageShape(ImageShapeType.SQUARE);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CheckBoxOutlineBlankSharpIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeImageShape(ImageShapeType.CIRCLE);
            }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <RadioButtonUncheckedOutlinedIcon fontSize={"small"} />
          </button>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Size</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <label className="block">
          <input
            className="form-range text-error"
            min={11}
            max={21}
            onChange={onChangeImageSize}
            type="range"
          />
        </label>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Position</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeImageLocation(ImageLocationType.UP);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <VerticalAlignTopOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "34%" }}
            onClick={() => {
              onChangeImageLocation(ImageLocationType.CENTER);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <VerticalAlignCenterOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeImageLocation(ImageLocationType.DOWN);
            }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <VerticalAlignBottomOutlinedIcon fontSize={"small"} />
          </button>
        </div>
      </Grid>

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Image link</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className=" -space-x-px w-100">
          <label className="block w-100 text-white">
            <input
              className={
                "form-input w-full text-white rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent " +
                classes.inputBackground
              }
              placeholder="www.mywebsite.com"
              type="text"
              onChange={(evt) => {}}
            />
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default DesignImages;
