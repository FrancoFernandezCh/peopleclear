import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Button from "components/CustomButtons/Button.js";
import SearchIcon from '@material-ui/icons/Search';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import FlareIcon from '@material-ui/icons/Flare';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ShowChartIcon from '@material-ui/icons/ShowChart';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Ejecutivos() {
  const classes = useStyles();
  return (
    <div id='nosotros' className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Profesionales que buscan oportunidades de mayor exigencia cognitiva, Posiciones más ejecutivas y de liderazgo</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Te ofrecemos posiciones en donde puedes desarrollar tu talento"
              icon={EmojiEventsIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Te ayudamos a buscar una organización en donde puedas brillar"
              icon={FlareIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Una buena remuneración es solo el primer paso busca desafíos interesantes"
              icon={HowToRegIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Espacios profesionales en donde puedas ser feliz"
              icon={InsertEmoticonIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Estamos comprometidos con tu crecimiento"
              icon={ShowChartIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Button
                href='https://puentedigital.hiringroom.com/jobs'
                color="danger"
                target='_blank'
                size="lg"
                rel="noopener noreferrer"
              >
                <SearchIcon />
                Buscar
              </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
