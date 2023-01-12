import { makeStyles } from "@material-ui/core/styles";

const DetailsTabStyle = makeStyles((theme) => ({
  cropContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "80px",
  },
  controls: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    width: "50%",
    transform: "translateX(-50%)",
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
  zoomRange: {
    width: "100%",
  },
}));

export default DetailsTabStyle;
