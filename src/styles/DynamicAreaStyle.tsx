import { makeStyles } from "@material-ui/core/styles";

const DynamicAreaStyle = makeStyles((theme) => ({
  socialGrid: { margin: "auto", textAlign: "left" },
  socialIconGrid: {
    margin: "auto",
  },
  socialUrlGrid: {
    margin: "auto",
  },
  socialUrlText: {
    fontSize: 10,
    textDecoration: "none",
    color: "black",
  },
}));

export default DynamicAreaStyle;
