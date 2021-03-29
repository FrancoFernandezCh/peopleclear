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


import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import CambiaSection from './Sections/CambiaSection'
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
      <Parallax filter image={require("assets/img/equipo2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>El Mundo cambió.</h1>
              <h4>
                El mundo laboral cambió aceleradamente en los últimos años y lo seguirá haciendo en el futuro, los desafíos no son los mismos, la sociedad nos pide pensar de forma distinta y nos pone nuevos desafíos.
              </h4>
              <br />
              <Button
                href='/empresas'
                color="danger"
                size="lg"
                rel="noopener noreferrer"
              >
                <BusinessIcon />
                Empresas
              </Button>
              <Button
                href='/personas'
                color="danger"
                size="lg"
                rel="noopener noreferrer"
              >
                <PeopleAltIcon />
                Personas
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <CambiaSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
