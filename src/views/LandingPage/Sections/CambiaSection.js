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
            <h2 className={`${classes.center}`}>Tu estrategia de Atracción de Talento puede cambiar el mundo</h2>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                        <NavPills
                            alignCenter
                            color="danger"
                            tabs={[
                                {
                                    tabButton: "Compensamos Ambientalmente",
                                    tabIcon: LocalFloristIcon,
                                    tabContent: (
                                        <GridContainer style={{overflow: 'hidden'}}  justify="center">
                                            <GridItem  xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <p className={classes.title}>
                                                    Cada vez que contratas un servicio con Clear People creas un futuro más
                                                    verde. Por cada servicio que se contratas se plantan nuevos árboles.
                            </p>

                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "Creamos nuevas culturas de negocios",
                                    tabIcon: BusinessCenterIcon,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/7063769/pexels-photo-7063769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/5750131/pexels-photo-5750131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <p className={classes.title}>
                                                    Al momento de contratar servicios con Clear People realizamos aportes a organizaciones que apoyan emprendimientos de bien común, conscientes, o de triple impacto.
                                                </p>

                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "Disminución de la desigualdad",
                                    tabIcon: AssessmentIcon,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/1998256/pexels-photo-1998256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <p className={classes.title}>
                                                Aportamos, desde Clear People a organizaciones que están trabajando para el desarrollo de la sociedad y la resolución de sus desafíos.
                                                </p>

                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "Transparentes y responsables:",
                                    tabIcon: PanToolIcon,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/6424613/pexels-photo-6424613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src='https://images.pexels.com/photos/3837494/pexels-photo-3837494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                                    className={navImageClasses}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <p className={classes.title}>
                                                La sociedad hoy exige niveles de transparencia extremadamente altos, ser muy cuidadosos con la privacidad de la información y basarse en información objetiva para tomar decisiones de contratación, en Clear People estamos 100% preparados para eso.
                                                </p>

                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
