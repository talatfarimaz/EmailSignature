import { Grid } from "@material-ui/core";
import LeftPanelTab from "./components/LeftPanel/LeftPanelTab";
import { ThemeProvider } from "@material-ui/core/styles";
import DefaultTheme from "./themes/DefaultTheme";
import { Provider } from "react-redux";
import store from "./state/store";
import FinalSignView from "./components/FinalSignView/FinalSignView";
import DetailsTabStyle from "./styles/DetailsTabStyle";
import AppStyle from "./styles/AppStyle";

function App() {
  const theme = DefaultTheme;
  const classes = AppStyle();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              xl={3}
              lg={4}
              md={5}
              sm={12}
              className={classes.leftPanelMainGrid}
            >
              <LeftPanelTab />
            </Grid>
            <Grid item xl={9} lg={8} md={7} sm={12}>
              <FinalSignView />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
