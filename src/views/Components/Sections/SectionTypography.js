import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image1 from "assets/img/plat1.jpg";
import image2 from "assets/img/plat2.jpeg";
import image3 from "assets/img/plat3.jpg";
import image4 from "assets/img/plat4.jpg";
import image5 from "assets/img/plat5.jpg";
import image6 from "assets/img/plat6.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>Bienvenue</h2>
          </div>
          
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Plats</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Plat1</h4>
              <img
                src={image1}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
          
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Plat2</h4>
              <img
                src={image3}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Plat3</h4>
              <img
                src={image4}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Plat4</h4>
              <img
                src={image5}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Plat5</h4>
              <img
                src={image6}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
