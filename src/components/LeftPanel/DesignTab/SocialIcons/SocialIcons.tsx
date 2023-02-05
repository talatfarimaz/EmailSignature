import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import CropDinOutlinedIcon from "@material-ui/icons/CropDinOutlined";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import { SocialIcon } from "react-social-icons";
import { IconType } from "../../../../constants/IconType";
import { IconBorderType } from "../../../../constants/IconBorderType";

const SocialIcons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    let icon1 = document.getElementById("twitterType1").childNodes;
    if (icon1 !== null && icon1 !== undefined) {
      icon1.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "svg" || child.tagName === "SVG") {
              child.style.borderRadius = "0%";
            }
          }
        }
      });
    }

    // @ts-ignore
    let icon2 = document.getElementById("twitterType2").childNodes;
    if (icon2 !== null && icon2 !== undefined) {
      icon2.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "svg" || child.tagName === "SVG") {
              child.style.borderRadius = "0%";
            }
          }
        }
      });
    }

    // @ts-ignore
    let icon3 = document.getElementById("twitterType3").childNodes;
    if (icon3 !== null && icon3 !== undefined) {
      icon3.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "svg" || child.tagName === "SVG") {
              child.style.borderRadius = "0%";
            }
          }
        }
      });
    }
  }, []);

  const onChangeIconType = (type: number) => {
    dispatch({
      type: "CHANGE_ICON_TYPE",
      payload: type,
    });
  };

  const onChangeIconBorderType = (type: number) => {
    dispatch({
      type: "CHANGE_ICON_BORDER_TYPE",
      payload: type,
    });
  };

  const onChangeIconSize = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_ICON_SIZE",
      payload: evt.target.value,
    });
  };

  const onChangeIconBetween = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_ICON_BETWEEN",
      payload: evt.target.value,
    });
  };

  const onChangeIconTemplateColor = (state: boolean) => {
    dispatch({
      type: "CHANGE_ICON_TEMPLATE_COLOR",
      payload: state,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Fill</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeIconType(IconType.ORIGINAL);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <SocialIcon
              id="twitterType1"
              network="twitter"
              fgColor={"white"}
              style={{ height: 20, width: 20 }}
            />
          </button>
          <button
            style={{ width: "34%" }}
            onClick={() => {
              onChangeIconType(IconType.BORDERED);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <SocialIcon
              id="twitterType2"
              network="twitter"
              bgColor={"white"}
              fgColor={"#00ACED"}
              style={{ height: 20, width: 20 }}
            />
          </button>
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeIconType(IconType.FREE);
            }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <SocialIcon
              id="twitterType3"
              network="twitter"
              bgColor={"#5948EA"}
              fgColor={"#00ACED"}
              style={{ height: 20, width: 20 }}
            />
          </button>
        </div>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Shape</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeIconBorderType(IconBorderType.SQUARE);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CropDinOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "34%" }}
            onClick={() => {
              onChangeIconBorderType(IconBorderType.RADIUS);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CheckBoxOutlineBlankSharpIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "33%" }}
            onClick={() => {
              onChangeIconBorderType(IconBorderType.CIRCLE);
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
            onChange={onChangeIconSize}
            type="range"
          />
        </label>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Space between</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <label className="block">
          <input
            className="form-range text-error"
            min={11}
            max={21}
            onChange={onChangeIconBetween}
            type="range"
          />
        </label>
      </Grid>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Match with template color</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "left" }}>
        <div className="flex -space-x-px w-100">
          <label className="inline-flex items-center space-x-2">
            <input
              className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
              type="checkbox"
              /*
                checked={labelColorState}
*/
              onChange={(evt) => {
                onChangeIconTemplateColor(evt.target.checked);
              }}
            />
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default SocialIcons;
