import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import BusinessIcon from '@material-ui/icons/Business';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';


import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import WorkSection from "views/LandingPage/Sections/WorkSection";
import Operacionales from "./Sections/Operacionales";
import Ejecutivos from "./Sections/Ejecutivos";




const useStyles = makeStyles(styles);

const dashboardRoutes = [];

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Clear People"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/personas.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Soluciones para personas</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Operacionales />
          <Ejecutivos />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
