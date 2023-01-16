import { makeStyles } from "@material-ui/core/styles";

const DesignTabStyle = makeStyles((theme) => ({
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
  inputBackground: {
    backgroundColor: "#7264EE",
    borderRadius: "1.0rem",
    "&::placeholder": {
      color: "#e0e0e0",
      fontWeight: "bold",
    },
  },
}));

export default DesignTabStyle;
