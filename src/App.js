import {Grid} from "@material-ui/core";
import LeftPanelTab from "./components/LeftPanel/LeftPanelTab";
import {ThemeProvider} from '@material-ui/core/styles';
import DefaultTheme from "./themes/DefaultTheme";


function App() {
    const theme = DefaultTheme;
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Grid container>
                    <Grid item xl={3} lg={4} md={5} sm={12}>
                        <LeftPanelTab/>
                    </Grid>
                    <Grid item xl={9} lg={8} md={7} sm={12}>

                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
