import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import HubspotForm from 'react-hubspot-form'

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div id='form' className={classes.section}>
      <GridContainer  justify="center">
        <GridItem  cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contacto</h2>
          <form>
            <GridContainer  justify="center">
              <GridItem  className={classes.flex} xs={12} sm={12} md={6}>
                <HubspotForm
                  portalId='5925496'
                  formId='b9a198e5-6677-4c56-81ce-d490a49d338c'
                  onSubmit={() => console.log('Submit!')}
                  onReady={(form) => console.log('Form ready!')}
                  loading={<div>Loading...</div>}
                />
                </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
