import React, { useEffect, useRef } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { DetailsModel } from "../../../models/DetailsModel";
import { SocialsModel } from "../../../models/SocialsModel";
import { SocialIcon } from "react-social-icons";
import AddBookModalStyle from "../../../styles/DynamicAreaStyle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import { ImageShapeType } from "../../../constants/ImageShapeType";
import { ImageLocationType } from "../../../constants/ImageLocationType";
import { IconFillType } from "../../../constants/IconFillType";

const DynamicDataArea = () => {
  const ava2 = require("../../../assets/ava2.png");
  // @ts-ignore
  const details: DetailsModel[] = useSelector((state) => state.app.detailsData);
  // @ts-ignore
  const socials: SocialsModel[] = useSelector((state) => state.app.socialsData);
  // @ts-ignore
  const photo = useSelector((state) => state.app.photoData);
  // @ts-ignore
  const fontSizePer = useSelector((state) => state.app.fontSizePer);
  // @ts-ignore
  const lineSpacing = useSelector((state) => state.app.lineSpacing);
  // @ts-ignore
  const spaceFromContent = useSelector((state) => state.app.spaceFromContent);
  // @ts-ignore
  const colorValue = useSelector((state) => state.app.colorValue);
  // @ts-ignore
  const imageShape = useSelector((state) => state.app.imageShape);
  // @ts-ignore
  const iconFillType = useSelector((state) => state.app.iconFillType);

  // @ts-ignore
  const imageSize = useSelector((state) => state.app.imageSize);

  // @ts-ignore
  const imageLocation = useSelector((state) => state.app.imageLocation);

  const classes = AddBookModalStyle();

  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    let icon = document.getElementById("iconType").childNodes;
    if (icon !== null && icon !== undefined) {
      icon.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "div" || child.tagName === "DIV") {
              if (child.hasChildNodes()) {
                // @ts-ignore
                for (const child2 of child.children) {
                  if (child2.tagName === "svg" || child2.tagName === "SVG") {
                    child2.style.height = fontSizePer + "px";
                    child2.style.width = fontSizePer + "px";
                    child2.style.marginRight = "4px";
                    child2.style.color = colorValue;
                  }
                }
              }
            }
          }
        }
      });
    }
  }, [JSON.stringify(details), iconFillType, fontSizePer, colorValue]);

  const getImageRadius = () => {
    if (imageShape === ImageShapeType.ELLIPSE) {
      return "30%";
    } else if (imageShape === ImageShapeType.CIRCLE) {
      return "50%";
    } else {
      return "0%";
    }
  };

  const getImageLocation = () => {
    if (imageLocation === ImageLocationType.UP) {
      return "flex-start";
    } else if (imageLocation === ImageLocationType.CENTER) {
      return "center";
    } else {
      return "flex-end";
    }
  };

  const getDetailTextType = (text: string) => {
    if (iconFillType === IconFillType.FULL_TEXT) {
      return text;
    } else if (iconFillType === IconFillType.FIRST_LETTER) {
      return text.charAt(0);
    }
  };

  const getIsTherePronouns = () => {
    const pronouns = details.filter((el) => el.name === "Pronouns");
    if (pronouns[0].value !== "") {
      return (
        <Typography
          style={{
            lineHeight: "1.5rem",
            fontWeight: "600",
            fontSize: fontSizePer + "px",
          }}
          className="text-base text-left font-semibold text-gray-400 "
        >
          {pronouns[0].value}
        </Typography>
      );
    }
  };

  return (
    <div className={"text-center mt-10"}>
      <h4 className="text-base font-semibold text-gray-300 m-auto">
        YOUR DESIGN TEMPLATE
      </h4>
      <div className="my-4 h-px  bg-slate-200 dark:bg-navy-500" />
      <Grid
        container
        spacing={lineSpacing}
        style={{
          marginTop: spaceFromContent + "px",
        }}
        direction="row"
        justifyContent="center"
        alignItems={getImageLocation()}
      >
        <Grid item xs={1}>
          <div
            className="avatar"
            style={{
              height: imageSize * 4 + "px",
              width: imageSize * 4 + "px",
            }}
          >
            <img
              style={{
                borderRadius: getImageRadius(),
              }}
              className="mask"
              src={photo !== null && photo !== "#" ? photo : ava2}
              alt="avatar"
            />
            <div className="absolute right-0 -m-0.5 h-3 w-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent" />
          </div>
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={9}
              alignContent={"flex-start"}
              alignItems={"flex-start"}
              style={{
                paddingLeft: imageSize * 3 - 25 + "px",
              }}
            >
              {details.length !== 0 && (
                <>
                  <Typography
                    style={{
                      lineHeight: "1.5rem",
                      fontWeight: "600",
                      fontSize: fontSizePer + "px",
                    }}
                    className="text-base text-left font-semibold text-black m-auto"
                  >
                    {details[0]?.value !== "" ? details[0].value : ""}
                  </Typography>
                  {getIsTherePronouns()}
                  <div style={{ display: "flex" }}>
                    <Typography
                      style={{
                        lineHeight: "1.5rem",
                        fontWeight: "600",
                        fontSize: fontSizePer + "px",
                      }}
                      className="text-base text-left font-semibold text-gray-400 "
                    >
                      {details[1]?.value !== "" ? details[1].value : ""}
                    </Typography>
                    <Typography
                      style={{
                        lineHeight: "1.5rem",
                        fontWeight: "bold",
                        fontSize: fontSizePer + "px",
                        marginLeft: "4px",
                      }}
                      className="text-base text-left font-bold ml-4 text-black "
                    >
                      {details[2]?.value !== "" && (
                        <FiberManualRecordIcon
                          style={{
                            color: "#998FF2",
                            width: "8px",
                            height: "8px",
                            marginRight: "2px",
                          }}
                        />
                      )}
                      {details[2]?.value !== "" ? details[2].value : ""}
                    </Typography>
                  </div>
                </>
              )}
            </Grid>

            <Grid
              item
              xs={3}
              alignContent={"flex-end"}
              alignItems={"flex-end"}
            />
            <Grid
              item
              xs={11}
              style={{
                paddingLeft: imageSize * 3 - 25 + "px",
              }}
            >
              <Grid container id="iconType">
                {details.length !== 0 &&
                  details.slice(3, details.length).map((t) => {
                    if (t.name !== "Pronouns")
                      return (
                        t.value !== null &&
                        t.value !== "" && (
                          <span className="flex mr-4">
                            {iconFillType === IconFillType.ICON ||
                            iconFillType === IconFillType.NONE ? null : (
                              <Typography
                                style={{
                                  lineHeight: "1.5rem",
                                  fontWeight: "600",
                                  color: colorValue,
                                  fontSize: fontSizePer + "px",
                                  marginRight: "5px",
                                }}
                                className="text-base text-left font-semibold  mr-2"
                              >
                                {getDetailTextType(t.placeholder)}
                              </Typography>
                            )}
                            {iconFillType === IconFillType.ICON && (
                              <div className="m-auto" id={t.placeholder}>
                                {t.defaultIconType}
                              </div>
                            )}
                            <Typography
                              className="text-base text-left font-bold text-gray-700"
                              style={{
                                fontSize: fontSizePer + "px",
                                lineHeight: "1.5rem",
                                fontWeight: "bold",
                              }}
                            >
                              {t.value}
                            </Typography>
                          </span>
                        )
                      );
                  })}
              </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid
              item
              xs={11}
              style={{
                paddingLeft: imageSize * 3 - 25 + "px",
              }}
            >
              <Grid container>
                {socials.length !== 0 &&
                  socials.map((t) => {
                    return (
                      t.url !== null &&
                      t.url !== "" && (
                        <Grid xs={3}>
                          <Grid container className={classes.socialGrid}>
                            <Grid
                              item
                              xs={2}
                              className={classes.socialIconGrid}
                            >
                              <SocialIcon
                                network={t.network}
                                style={{ height: 15, width: 15 }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={10}
                              className={classes.socialUrlGrid}
                            >
                              <Typography className={classes.socialUrlText}>
                                {t.url}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      )
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <h4
              className="text-left font-bold font-black"
              style={{ fontSize: "11px" }}
            >
              Create your own&nbsp;
            </h4>
            <h4
              className="text-left font-bold"
              style={{ fontSize: "11px", color: "#998FF2" }}
            >
              email signature
            </h4>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1}>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <ImageIcon />
              </IconButton>
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={1}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <button className="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90">
                Send
                <SendIcon className="ml-1" />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DynamicDataArea;
