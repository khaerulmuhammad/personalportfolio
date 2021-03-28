import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./About.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px",
    background: "#001427",
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#39b999",
  },
  h2: {
    color: "#B8C2D7",
    paddingBottom: "10px",
    fontSize: "20px",
    fontFamily: "monospace",
  },
  accord: {
    backgroundColor: "#001427",
    color: "#BFC7BB",
  },
  accordSummary: {
    color: "#6D7C81",
  },

  expandIcon: {
    color: "#6D7C81",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.h2}>--- Experience --------------</h2>
      <Accordion
        className={classes.accord}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={classes.accord}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>2020 to 2021</Typography>
          <Typography className={classes.secondaryHeading}>
            Freelancer FrontEnd Web Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordSummary}>
          <Typography>
            Builds some user interface for website with HTML CSS Javascript and
            Framework supports
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accord}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className={classes.accord}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>2018 to 2019</Typography>
          <Typography className={classes.secondaryHeading}>
            Engineer at PT. Sinergi Aitikom
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordSummary}>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
