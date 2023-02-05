import React from "react";
import { Grid, Menu, MenuItem, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CHANGE_TEXT_COLOR } from "../../../../state/actionTypes";
import Button from "@material-ui/core/Button";
import { LineType } from "../../../../constants/LineType";

const DecorativeLine = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedLine, setSelectedLine] = React.useState<number>(LineType.NONE);

  const onChangeTextColor = (color: string) => {
    dispatch({
      type: "CHANGE_TEXT_COLOR",
      payload: color,
    });
  };

  const handleClickEl = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEl = () => {
    setAnchorEl(null);
  };

  const handleChangeLineType = (type: number) => {
    setSelectedLine(type);
    handleCloseEl();
    dispatch({
      type: "CHANGE_LINE_TYPE",
      payload: type,
    });
  };

  const getLineDetail = () => {
    if (selectedLine === LineType.NONE) {
      return <Typography style={{ color: "white" }}>None</Typography>;
    } else if (selectedLine === LineType.DASHED) {
      return (
        <Grid container>
          <Grid item xs={8}>
            <p style={{ borderTop: "dashed", color: "white", marginTop: 10 }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                color: "white",
              }}
            >
              Dashed
            </Typography>
          </Grid>
        </Grid>
      );
    } else if (selectedLine === LineType.DOTTED) {
      return (
        <Grid container>
          <Grid item xs={8}>
            <p style={{ borderTop: "dotted", color: "white", marginTop: 10 }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                color: "white",
              }}
            >
              Dotted
            </Typography>
          </Grid>
        </Grid>
      );
    } else if (selectedLine === LineType.SLIM) {
      return (
        <Grid container>
          <Grid item xs={8}>
            <p
              style={{
                borderTop: "solid",
                color: "white",
                marginTop: 10,
                borderWidth: 1,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                color: "white",
              }}
            >
              Slim
            </Typography>
          </Grid>
        </Grid>
      );
    } else if (selectedLine === LineType.HEAVY) {
      return (
        <Grid container>
          <Grid item xs={8}>
            <p
              style={{
                borderTop: "solid",
                color: "white",
                marginTop: 10,
                borderWidth: 3,
              }}
            />{" "}
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                color: "white",
              }}
            >
              Heavy
            </Typography>
          </Grid>
        </Grid>
      );
    } else if (selectedLine === LineType.NORMAL) {
      return (
        <Grid container>
          <Grid item xs={8}>
            <p
              style={{
                borderTop: "solid",
                color: "white",
                marginTop: 10,
                borderWidth: 2,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{
                color: "white",
              }}
            >
              Normal
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };

  const onChangeLineTemplateColor = (state: boolean) => {
    dispatch({
      type: "CHANGE_LINE_TEMPLATE_COLOR",
      payload: state,
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ margin: "auto" }}>
        <h5 className="text-white font-light">Style</h5>
      </Grid>

      <Grid item xs={8} style={{ margin: "auto" }}>
        <Button
          variant="outlined"
          style={{
            color: "rgb(170, 187, 204)",
            borderColor: "rgb(170, 187, 204)",
            width: "100%",
          }}
          onClick={handleClickEl}
        >
          {getLineDetail()}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseEl}
        >
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.NONE);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8} />
              <Grid item xs={4}>
                <Typography>None</Typography>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.DASHED);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p style={{ borderTop: "dashed", marginTop: 10 }} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Dashed</Typography>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.DOTTED);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p style={{ borderTop: "dotted", marginTop: 10 }} />
              </Grid>
              <Grid item xs={4}>
                <Typography>Dotted</Typography>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.SLIM);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p
                  style={{ borderTop: "solid", marginTop: 10, borderWidth: 1 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Slim</Typography>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.NORMAL);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p
                  style={{ borderTop: "solid", marginTop: 10, borderWidth: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Normal</Typography>
              </Grid>
            </Grid>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLineType(LineType.HEAVY);
            }}
            style={{ width: "250px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <p
                  style={{ borderTop: "solid", marginTop: 10, borderWidth: 3 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Heavy</Typography>
              </Grid>
            </Grid>
          </MenuItem>
        </Menu>
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
                onChangeLineTemplateColor(evt.target.checked);
              }}
            />
          </label>
        </div>
      </Grid>
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
    </Grid>
  );
};

export default DecorativeLine;
