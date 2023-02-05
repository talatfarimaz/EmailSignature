import React, { useEffect, useRef, useState } from "react";
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
import StopIcon from "@material-ui/icons/Stop";
import RemoveIcon from "@material-ui/icons/Remove";
import { ImageShapeType } from "../../../constants/ImageShapeType";
import { ImageLocationType } from "../../../constants/ImageLocationType";
import { IconFillType } from "../../../constants/IconFillType";
import { IconDirectionType } from "../../../constants/IconDirectionType";
import { SeparatorType } from "../../../constants/SeparatorType";
import { LineType } from "../../../constants/LineType";
import { IconType } from "../../../constants/IconType";
import { SocialIconColors } from "../../../constants/SocialIconColors";
import { IconBorderType } from "../../../constants/IconBorderType";

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

  // @ts-ignore
  const iconDirection = useSelector((state) => state.app.iconDirection);

  // @ts-ignore
  const separatorType = useSelector((state) => state.app.separatorType);

  // @ts-ignore
  const textColor = useSelector((state) => state.app.textColor);

  // @ts-ignore
  const labelColorState = useSelector((state) => state.app.labelColorState);

  // @ts-ignore
  const lineType = useSelector((state) => state.app.lineType);

  // @ts-ignore
  const iconType = useSelector((state) => state.app.iconType);

  // @ts-ignore
  const iconBorder = useSelector((state) => state.app.iconBorder);

  // @ts-ignore
  const iconSize = parseInt(useSelector((state) => state.app.iconSize));

  // @ts-ignore
  const iconBetween = parseInt(useSelector((state) => state.app.iconBetween));

  // @ts-ignore
  const iconTemplateColor = useSelector((state) => state.app.iconTemplateColor);

  // @ts-ignore
  const lineTemplateColor = useSelector((state) => state.app.lineTemplateColor);

  const [divHeight, setDivHeight] = useState<number>(24);

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
                    child2.style.color = labelColorState
                      ? colorValue
                      : textColor;
                  }
                }
              }
            }
          }
        }
      });
    }
  }, [
    JSON.stringify(details),
    iconFillType,
    fontSizePer,
    colorValue,
    iconSize,
  ]);

  useEffect(() => {
    // @ts-ignore
    let icon3 = document.getElementById("socialId").childNodes;
    if (icon3 !== null && icon3 !== undefined) {
      icon3.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "A" || child.tagName === "a") {
              if (child.hasChildNodes()) {
                for (const chl of child.children) {
                  if (chl.hasChildNodes()) {
                    for (const ch of chl.children) {
                      if (ch.tagName === "SVG" || ch.tagName === "svg") {
                        ch.style.borderRadius = "0%";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    changeIcons();
  }, [iconType, socials, iconBorder, iconSize]);

  useEffect(() => {
    // @ts-ignore
    let dataAreaDiv = document.getElementById("dataArea");
    // @ts-ignore
    setDivHeight(dataAreaDiv?.offsetHeight - 10);
  }, [JSON.stringify(details), JSON.stringify(socials)]);

  const changeIcons = () => {
    // @ts-ignore
    let icons = document.getElementById("socialId").childNodes;
    if (icons !== null && icons !== undefined) {
      icons.forEach((el) => {
        if (el.hasChildNodes()) {
          // @ts-ignore
          for (const child of el.children) {
            if (child.tagName === "A" || child.tagName === "a") {
              if (child.hasChildNodes()) {
                for (const chl of child.children) {
                  if (chl.hasChildNodes()) {
                    for (const ch of chl.children) {
                      if (ch.tagName === "SVG" || ch.tagName === "svg") {
                        if (iconBorder === IconBorderType.SQUARE) {
                          ch.style.borderRadius = "0%";
                        } else if (iconBorder === IconBorderType.CIRCLE) {
                          ch.style.borderRadius = "50%";
                        } else if (iconBorder === IconBorderType.RADIUS) {
                          ch.style.borderRadius = "20%";
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  };

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

  const getSeparator = () => {
    if (separatorType === SeparatorType.LINE) {
      return (
        <Typography>
          <RemoveIcon
            style={{
              transform: "rotate(90deg)",
              color: textColor,
              fontSize: fontSizePer + "px",
              marginLeft: 2,
              marginRight: -4,
            }}
          />
        </Typography>
      );
    } else if (separatorType === SeparatorType.CIRCLE) {
      return (
        <Typography>
          <FiberManualRecordIcon
            style={{
              color: textColor,
              fontSize: fontSizePer + "px",
              marginLeft: 2,
              marginRight: -4,
            }}
          />
        </Typography>
      );
    } else if (separatorType === SeparatorType.SQUARE) {
      return (
        <Typography>
          <StopIcon
            style={{
              color: textColor,
              fontSize: fontSizePer + "px",
              marginLeft: 2,
              marginRight: -4,
            }}
          />
        </Typography>
      );
    } else {
      return null;
    }
  };

  const getLineDetail = (selectedLine: number) => {
    if (selectedLine === LineType.NONE) {
      return null;
    } else if (selectedLine === LineType.DASHED) {
      return (
        <p
          style={{
            borderLeft: "dashed",
            height: "100%",
            borderColor: lineTemplateColor ? colorValue : textColor,
          }}
        />
      );
    } else if (selectedLine === LineType.DOTTED) {
      return (
        <p
          style={{
            borderLeft: "dotted",
            height: "100%",
            borderColor: lineTemplateColor ? colorValue : textColor,
          }}
        />
      );
    } else if (selectedLine === LineType.SLIM) {
      return (
        <p
          style={{
            border: "solid none none none",
            borderColor: lineTemplateColor ? colorValue : textColor,
            height: "100%",
            borderWidth: 1,
          }}
        />
      );
    } else if (selectedLine === LineType.HEAVY) {
      return (
        <p
          style={{
            border: "solid none none none",
            borderColor: lineTemplateColor ? colorValue : textColor,
            height: "100%",
            borderWidth: 3,
          }}
        />
      );
    } else if (selectedLine === LineType.NORMAL) {
      return (
        <p
          style={{
            border: "solid none none none",
            height: "100%",
            borderColor: lineTemplateColor ? colorValue : textColor,
            borderWidth: 2,
          }}
        />
      );
    }
  };

  // @ts-ignore
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
            {photo !== null && photo !== "#" && (
              <div
                style={{
                  width: "3px",
                  height: divHeight + "px",
                  marginLeft: "5px",
                  minHeight: imageSize * 4 + "px",
                }}
              >
                {getLineDetail(lineType)}
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={11} id={"dataArea"}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={9}
              alignContent={"flex-start"}
              alignItems={"flex-start"}
              style={{
                paddingLeft: imageSize * 3 - 10 + "px",
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
              xs={iconDirection === IconDirectionType.HORIZONTAL ? 11 : 1}
              style={{
                paddingLeft: imageSize * 3 - 10 + "px",
              }}
            >
              <Grid container id="iconType">
                {details.length !== 0 &&
                  details
                    .slice(3, details.length)
                    .filter(
                      (detail) =>
                        detail.value !== null &&
                        detail.value !== "" &&
                        detail.name !== "Pronouns"
                    )
                    .map((t, index) => {
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
                                  color: labelColorState
                                    ? colorValue
                                    : textColor,
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
                                color: textColor,
                              }}
                            >
                              {t.value}
                            </Typography>
                            {index !==
                              details
                                .slice(3, details.length)
                                .filter(
                                  (detail) =>
                                    detail.value !== null &&
                                    detail.value !== "" &&
                                    detail.name !== "Pronouns"
                                ).length -
                                1 && getSeparator()}
                          </span>
                        )
                      );
                    })}
              </Grid>
            </Grid>
            <Grid
              item
              xs={iconDirection === IconDirectionType.HORIZONTAL ? 1 : 11}
            />
            <Grid
              item
              xs={11}
              style={{
                paddingLeft: imageSize * 3 - 10 + "px",
              }}
            >
              <Grid container id="socialId">
                {socials.length !== 0 &&
                  socials.map((t, index) => {
                    if (iconType === IconType.ORIGINAL) {
                      return (
                        t.url !== null &&
                        t.url !== "" && (
                          <span
                            className={"ml-2"}
                            id={t.network + index.toString()}
                            style={{ marginRight: iconBetween + "px" }}
                          >
                            <SocialIcon
                              network={t.network}
                              bgColor={iconTemplateColor && colorValue}
                              style={{
                                height: 5 + iconSize,
                                width: 5 + iconSize,
                              }}
                            />
                          </span>
                        )
                      );
                    } else if (iconType === IconType.FREE) {
                      {
                        const color = SocialIconColors.filter(
                          (social) => social.network === t.network
                        )[0].iconColor;
                        return (
                          t.url !== null &&
                          t.url !== "" && (
                            <span
                              className={"ml-2"}
                              id={t.network + index.toString()}
                              style={{ marginRight: iconBetween + "px" }}
                            >
                              <SocialIcon
                                network={t.network}
                                fgColor={iconTemplateColor ? colorValue : color}
                                bgColor={"white"}
                                style={{
                                  height: 10 + iconSize,
                                  width: 10 + iconSize,
                                }}
                              />
                            </span>
                          )
                        );
                      }
                    } else if (iconType === IconType.BORDERED) {
                      {
                        const color = SocialIconColors.filter(
                          (social) => social.network === t.network
                        )[0].iconColor;
                        return (
                          t.url !== null &&
                          t.url !== "" && (
                            <span
                              className={"ml-2"}
                              id={t.network + index.toString()}
                              style={{ marginRight: iconBetween + "px" }}
                            >
                              <SocialIcon
                                network={t.network}
                                fgColor={iconTemplateColor ? colorValue : color}
                                bgColor={"white"}
                                style={{
                                  height: 10 + iconSize,
                                  width: 10 + iconSize,
                                  border:
                                    "1px solid " +
                                    (iconTemplateColor ? colorValue : color),
                                }}
                              />
                            </span>
                          )
                        );
                      }
                    }
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
