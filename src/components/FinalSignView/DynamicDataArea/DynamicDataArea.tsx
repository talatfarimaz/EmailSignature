import React from "react";
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

const DynamicDataArea = () => {
  const ava2 = require("../../../assets/ava2.png");
  // @ts-ignore
  const test: DetailsModel[] = useSelector((state) => state.app.detailsData);
  // @ts-ignore
  const test2: SocialsModel[] = useSelector((state) => state.app.socialsData);
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
  const imageSize = useSelector((state) => state.app.imageSize);

  const classes = AddBookModalStyle();

  const getImageRadius = () => {
    if (imageShape === ImageShapeType.ELLIPSE) {
      return "30%";
    } else if (imageShape === ImageShapeType.CIRCLE) {
      return "50%";
    } else {
      return "0%";
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
        <Grid
          item
          xs={7}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
          style={{
            paddingLeft: imageSize * 3 - 25 + "px",
          }}
        >
          {test.length !== 0 && (
            <>
              <Typography
                style={{
                  lineHeight: "1.5rem",
                  fontWeight: "600",
                  fontSize: fontSizePer + "px",
                }}
                className="text-base text-left font-semibold text-black m-auto"
              >
                {test[0]?.value !== "" ? test[0].value : ""}
              </Typography>
              <div style={{ display: "flex" }}>
                <Typography
                  style={{
                    lineHeight: "1.5rem",
                    fontWeight: "600",
                    fontSize: fontSizePer + "px",
                  }}
                  className="text-base text-left font-semibold text-gray-400 "
                >
                  {test[1]?.value !== "" ? test[1].value : ""}
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
                  {test[2]?.value !== "" && (
                    <FiberManualRecordIcon
                      style={{
                        color: "#998FF2",
                        width: "8px",
                        height: "8px",
                        marginRight: "2px",
                      }}
                    />
                  )}
                  {test[2]?.value !== "" ? test[2].value : ""}
                </Typography>
              </div>
            </>
          )}
        </Grid>
        <Grid
          item
          xs={1}
          alignContent={"flex-start"}
          alignItems={"flex-start"}
        />
        <Grid item xs={3} alignContent={"flex-end"} alignItems={"flex-end"} />
        <Grid item xs={1} />
        <Grid item xs={11}>
          <Grid container>
            {test.length !== 0 &&
              test.slice(3, test.length).map((t) => {
                return (
                  t.value !== null &&
                  t.value !== "" && (
                    <Grid xs={4}>
                      <Typography
                        style={{
                          lineHeight: "1.5rem",
                          fontWeight: "600",
                          color: colorValue,
                          fontSize: fontSizePer + "px",
                        }}
                        className="text-base text-left font-semibold m-auto mt-1"
                      >
                        {t.placeholder}
                      </Typography>
                      <Typography
                        className="text-base text-left font-bold text-gray-700 m-auto mb-1"
                        style={{
                          fontSize: fontSizePer - 3 + "px",
                          lineHeight: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        {t.value}
                      </Typography>
                    </Grid>
                  )
                );
              })}
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <Grid container>
            {test2.length !== 0 &&
              test2.map((t) => {
                return (
                  t.url !== null &&
                  t.url !== "" && (
                    <Grid xs={3}>
                      <Grid container className={classes.socialGrid}>
                        <Grid item xs={2} className={classes.socialIconGrid}>
                          <SocialIcon
                            network={t.network}
                            style={{ height: 15, width: 15 }}
                          />
                        </Grid>
                        <Grid item xs={10} className={classes.socialUrlGrid}>
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
