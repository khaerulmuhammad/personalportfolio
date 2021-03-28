import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: "#39b999",
    backgroundColor: "#001427",
    borderRadius: "999px",
  },
});

export default function CenteredTabs() {
  //   const classes = menus ();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="#39b999"
        fontFamily="monospace"
        centered
        textTransform="lowerCase"
      >
        <Tab label="Home" />
        <Tab label=" Projects" />
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Resume" />
      </Tabs>
    </Paper>
  );
}
