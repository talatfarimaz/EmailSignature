import React, { ReactNode } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import InputIcon from "@material-ui/icons/Input";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";
import { useDispatch, useSelector } from "react-redux";
import { IconFillType } from "../../../../constants/IconFillType";
import { DetailsModel } from "../../../../models/DetailsModel";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Menu from "@material-ui/core/Menu";
import DesignTabStyle from "../../../../styles/DesignTabStyle";
import { IconElements } from "../../../../constants/IconElements";
import { IconDirectionType } from "../../../../constants/IconDirectionType";
import { SeparatorType } from "../../../../constants/SeparatorType";
import { CHANGE_TEXT_COLOR } from "../../../../state/actionTypes";

const DesignDetails = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIcon, setSelectedIcon] = React.useState<string>("");

  const classes = DesignTabStyle();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    selectedIcon: string
  ) => {
    setSelectedIcon(selectedIcon);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // @ts-ignore
  const details: DetailsModel[] = useSelector((state) => state.app.detailsData);
  // @ts-ignore
  const fillType: IconFillType = useSelector((state) => state.app.iconFillType);

  // @ts-ignore
  const labelColorState = useSelector((state) => state.app.labelColorState);

  const onChangeTextFillType = (type: number) => {
    dispatch({
      type: "CHANGE_FILL_TYPE",
      payload: type,
    });
  };

  const onChangeDirectionType = (type: number) => {
    dispatch({
      type: "CHANGE_DIRECTION_TYPE",
      payload: type,
    });
  };

  const onChangeSeperatorType = (type: number) => {
    dispatch({
      type: "CHANGE_SEPARATOR_TYPE",
      payload: type,
    });
  };

  const onChangeIcon = (icon: ReactNode) => {
    const changedIcon = details.filter(
      (detail) => detail.placeholder == selectedIcon
    );
    const index = details.findIndex(
      (detail) => detail.placeholder === selectedIcon
    );
    changedIcon[0].defaultIconType = icon;
    const newElements = [...details];
    newElements[index] = changedIcon[0];
    dispatch({
      type: "ADD_DETAILS",
      payload: newElements,
    });
    handleClose();
  };
  const onChangeTextColor = (color: string) => {
    dispatch({
      type: "CHANGE_TEXT_COLOR",
      payload: color,
    });
  };

  const onChangeLabelColor = (state: boolean) => {
    dispatch({
      type: "CHANGE_LABEL_COLOR",
      payload: state,
    });
  };

  const onChangeOptimizeMobile = (state: boolean) => {
    dispatch({
      type: "CHANGE_OPTIMIZE_MOBILE",
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
            style={{ width: "25%" }}
            onClick={() => {
              onChangeTextFillType(IconFillType.FULL_TEXT);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            Phone
          </button>
          <button
            style={{ width: "25%" }}
            onClick={() => {
              onChangeTextFillType(IconFillType.FIRST_LETTER);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            P
          </button>
          <button
            style={{ width: "25%" }}
            onClick={() => {
              onChangeTextFillType(IconFillType.ICON);
            }}
            className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <CallOutlinedIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "25%" }}
            onClick={() => {
              onChangeTextFillType(IconFillType.NONE);
            }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            None
          </button>
        </div>
      </Grid>
      {fillType === IconFillType.ICON && (
        <>
          <Grid item xs={4}>
            <h5 className="text-white font-light">Labels icons</h5>
          </Grid>
          <Grid item xs={8} style={{ margin: "auto" }}>
            <Grid container>
              {details.length !== 0 &&
                details.slice(3, details.length).map((t) => {
                  if (t.value !== "") {
                    return (
                      <Grid container className={"mb-2"}>
                        <Grid item xs={8} style={{ margin: "auto" }}>
                          <h5 className="text-white font-light">
                            {t.placeholder}
                          </h5>
                        </Grid>
                        <Grid item xs={4} style={{ display: "grid" }}>
                          <Button
                            variant="outlined"
                            onClick={(evt) => {
                              handleClick(evt, t.placeholder);
                            }}
                            style={{
                              color: "rgb(170, 187, 204)",
                              borderColor: "rgb(170, 187, 204)",
                            }}
                            startIcon={t.defaultIconType}
                            endIcon={<ExpandMoreIcon />}
                          />
                        </Grid>
                      </Grid>
                    );
                  }
                })}
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.detailsMenu}
              >
                {IconElements.map((icon) => {
                  if (icon.placeholder !== "Pronouns") {
                    return (
                      <Grid container spacing={2} style={{ width: "300px" }}>
                        <Grid item xs={5}>
                          <Typography style={{ fontSize: 14, paddingLeft: 5 }}>
                            {icon.placeholder}
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid container>
                            {(icon.defaultIconTypeList as Array<any>) &&
                              icon.defaultIconTypeList?.map(
                                (iconEl: ReactNode | null) => {
                                  return (
                                    <Grid item xs={3}>
                                      <IconButton
                                        onClick={() => {
                                          onChangeIcon(iconEl);
                                        }}
                                        size={"small"}
                                      >
                                        {iconEl}
                                      </IconButton>
                                    </Grid>
                                  );
                                }
                              )}
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  }
                })}
              </Menu>
            </Grid>
          </Grid>
        </>
      )}
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Direction</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto" }}>
        <div className="flex -space-x-px w-100">
          <button
            style={{ width: "50%" }}
            onClick={() => {
              onChangeDirectionType(IconDirectionType.HORIZONTAL);
            }}
            className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <InputIcon fontSize={"small"} />
          </button>
          <button
            style={{ width: "50%" }}
            onClick={() => {
              onChangeDirectionType(IconDirectionType.VERTICAL);
            }}
            className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
          >
            <SystemUpdateAltOutlinedIcon fontSize={"small"} />
          </button>
        </div>
      </Grid>
      {fillType !== IconFillType.ICON && (
        <>
          <Grid item xs={4} style={{ margin: "auto" }}>
            <h5 className="text-white font-light">Seperator</h5>
          </Grid>
          <Grid item xs={8} style={{ margin: "auto" }}>
            <div className="flex -space-x-px w-100">
              <button
                style={{ width: "25%" }}
                onClick={() => {
                  onChangeSeperatorType(SeparatorType.LINE);
                }}
                className="btn rounded-r-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
              >
                I
              </button>
              <button
                style={{ width: "25%" }}
                onClick={() => {
                  onChangeSeperatorType(SeparatorType.CIRCLE);
                }}
                className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
              >
                <FiberManualRecordIcon
                  style={{ width: "12px", height: "12px" }}
                />
              </button>
              <button
                style={{ width: "25%" }}
                onClick={() => {
                  onChangeSeperatorType(SeparatorType.SQUARE);
                }}
                className="btn rounded-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
              >
                <StopIcon style={{ width: "12px", height: "12px" }} />
              </button>
              <button
                style={{ width: "25%" }}
                onClick={() => {
                  onChangeSeperatorType(SeparatorType.NONE);
                }}
                className="btn rounded-l-none border border-info font-medium text-info hover:bg-info hover:text-white focus:bg-info focus:text-white active:bg-info/90"
              >
                None
              </button>
            </div>
          </Grid>
        </>
      )}

      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Text color</h5>
      </Grid>
      <Grid item xs={8} style={{ margin: "auto", textAlign: "center" }}>
        <button
          style={{ backgroundColor: "#000000" }}
          onClick={() => {
            onChangeTextColor("#000000");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#1c1c1c" }}
          onClick={() => {
            onChangeTextColor("#1c1c1c");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#2d2d2d" }}
          onClick={() => {
            onChangeTextColor("#2d2d2d");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#626262" }}
          onClick={() => {
            onChangeTextColor("#626262");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#9a9a9a" }}
          onClick={() => {
            onChangeTextColor("#9a9a9a");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#c9c9c9" }}
          onClick={() => {
            onChangeTextColor("#c9c9c9");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{ backgroundColor: "#e0e0e0" }}
          onClick={() => {
            onChangeTextColor("#e0e0e0");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
        <button
          style={{
            backgroundColor: "#ffffff",
            borderColor: "gray",
            border: "1px solid gray",
          }}
          onClick={() => {
            onChangeTextColor("#ffffff");
          }}
          className="btn m-1 h-6 w-6 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
        />
      </Grid>
      {fillType !== IconFillType.NONE && (
        <>
          <Grid item xs={4} style={{ margin: "auto" }}>
            <h5 className="text-white font-light">
              Match labels with template color
            </h5>
          </Grid>
          <Grid item xs={8} style={{ margin: "auto", textAlign: "left" }}>
            <div className="flex -space-x-px w-100">
              <label className="inline-flex items-center space-x-2">
                <input
                  className="form-switch h-5 w-10 rounded-full bg-slate-300 before:rounded-full before:bg-slate-50 checked:!bg-success checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:before:bg-white"
                  type="checkbox"
                  checked={labelColorState}
                  onChange={(evt) => {
                    onChangeLabelColor(evt.target.checked);
                  }}
                />
              </label>
            </div>
          </Grid>
        </>
      )}

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
              onChange={(evt) => {
                onChangeOptimizeMobile(evt.target.checked);
              }}
            />
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default DesignDetails;
