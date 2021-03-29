import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PanToolIcon from '@material-ui/icons/PanTool';

import styles from "assets/jss/material-kit-react/views/profilePage.js";



import NavPills from "components/NavPills/NavPills";


import studio2 from "assets/img/examples/studio-2.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import { Link } from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classes.section}>
      <h2 className={`${classes.center}`}>¿Empezamos?</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
      
          
 
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
