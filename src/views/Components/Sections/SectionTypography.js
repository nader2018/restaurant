import React  , {useState}from "react";
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
import Button from "components/CustomButtons/Button.js";
import Popover from "@material-ui/core/Popover";
import image1 from "assets/img/plat1.jpg";
import image2 from "assets/img/plat2.jpeg";
import image3 from "assets/img/plat3.jpeg";
import image4 from "assets/img/plat4.jpg";
import image5 from "assets/img/plat5.jpg";
import image6 from "assets/img/plat6.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  const [anchorElTop, setAnchorElTop] = useState();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Nos plats du jour cette semaine</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Plat1</h4>
              <img onClick={event => setAnchorElTop(event.currentTarget)}
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
              <img onClick={event => setAnchorElTop(event.currentTarget)}
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
              <img onClick={event => setAnchorElTop(event.currentTarget)}
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
              <img onClick={event => setAnchorElTop(event.currentTarget)}
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
              <img onClick={event => setAnchorElTop(event.currentTarget)}
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
            
            <Popover
              classes={{
                paper: classes.popover
              }}
              open={Boolean(anchorElTop)}
              anchorEl={anchorElTop}
              onClose={() => setAnchorElTop(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
            >
              <h3 className={classes.popoverHeader}>plat5</h3>
              <div className={classes.popoverBody}>
                contenu : salade pour le dessert.
              </div>
            </Popover>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}

