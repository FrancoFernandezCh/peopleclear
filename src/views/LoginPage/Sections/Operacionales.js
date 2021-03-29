import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { AvTimer } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import SearchIcon from '@material-ui/icons/Search';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Operacionales() {
    const classes = useStyles();
    return (
        <div id='nosotros' className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Personas que buscan posiciones operacionales</h2>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Te ofrecemos oportunidades laborales aquí y ahora"
                            icon={AvTimer}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Complementa tus ingresos"
                            icon={MonetizationOnIcon}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Maneja 100% tus tiempos"
                            icon={TimelapseIcon}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Las oportunidades de trabajo hechas simples"
                            icon={WorkOutlineIcon}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Muchos trabajos, muchas oportunidades para crecer"
                            icon={GroupWorkIcon}
                            iconColor="danger"
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
