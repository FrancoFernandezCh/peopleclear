import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import { Slider } from "@material-ui/core";

const useStyles = makeStyles(styles);

const marks = [
  {
    value: 0,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 37,
    label: '37',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div id='estrategia' className={classes.section}>
      <h2 className={classes.title}>¿Porqué la estrategia de atracción de <br /> talento es importante?</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Slider
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={20}
                  valueLabelDisplay="on"
                />

              </GridItem>
              <h4 className={classes.cardTitle}>
                10 veces un sueldo promedio de tu empresa cuesta un error de contratación
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={30}
                  valueLabelDisplay="on"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                20% de los proyectos exitosos están relacionados al talento en el momento oportuno.
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Slider
                  defaultValue={12}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={30}
                  valueLabelDisplay="on"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                12 veces más rentabilidad tienen las empresas que tienen una estrategia de clase mundial
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Slider
                  defaultValue={60}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="on"
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ahorra hasta 60 % de tiempo con el talento adecuado.
                <br />
              </h4>
            </Card>
          </GridItem>


        </GridContainer>
      </div>
    </div>
  );
}
