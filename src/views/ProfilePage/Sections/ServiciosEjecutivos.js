import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import MediaCard from "components/InfoArea/CardServices";


const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div id='nosotros' className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Servicios de Apoyo a funciones Operacionales</h2>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer style={{marginTop:'10px'}}>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://firmasclear.s3-sa-east-1.amazonaws.com/imgweb/Servicio21.jpg'
                            title='Research'
                            desc='Realizamos procesos de Atracción de Talento para encontrar a las personas que tu organización necesita para hacer la diferencia en tu estrategia.'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://firmasclear.s3-sa-east-1.amazonaws.com/imgweb/Servicio22.jpg'
                            title='Hunting'
                            desc='Atraemos a la persona que tu organización necesita para cumplir con su plan estratégico y sus metas de negocio'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://firmasclear.s3-sa-east-1.amazonaws.com/imgweb/Servicio+12.jpg'
                            title='Servicios transitorios'
                            desc='Dotamos a tu organización de personas de roles profesionales temporales de alto valor agregado.'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://firmasclear.s3-sa-east-1.amazonaws.com/imgweb/Servicio23.jpg'
                            title='Outsourcing/BPO'
                            desc='Externalizamos funciones o procesos completos de tu organización de forma que puedas focalizarte en tu negocio'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://firmasclear.s3-sa-east-1.amazonaws.com/imgweb/Servicio42.jpg'
                            title='Evaluación de Competencias'
                            desc='Evalúa a candidatos externos al cual ya estás decido a contratar para saber sus fortalezas, debilidades y desafíos que tendrá la jefatura que lo reciba. Has el mismo trabajo con candidatos de concursos internos o conoce el potencial de tus colaboradores de alto desempeño.'
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
