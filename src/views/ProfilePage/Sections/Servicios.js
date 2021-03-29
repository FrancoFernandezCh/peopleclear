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
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://image.freepik.com/foto-gratis/empresarios-mujeres-negocios-milenio-asia-encuentran-ideas-lluvia-ideas-sobre-nuevos-colegas-proyecto-papeleo-que-trabajan-juntos-planificar-estrategia-exito-disfrutan-trabajo-equipo-pequena-moderna-oficina-nocturna_7861-2386.jpg'
                            title='Búsquedas de Staff Operativo'
                            desc='Encontramos la cantidad y calidad que tus procesos operacionales requieren en una multiplicidad de industrias en tiempos que no podrás creer, con la calificación necesaria y con foco en la ubicación geográfica para tener menores tasas de ausentismo.'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://image.freepik.com/foto-gratis/empresarios-mujeres-negocios-milenio-asia-encuentran-ideas-lluvia-ideas-sobre-nuevos-colegas-proyecto-papeleo-que-trabajan-juntos-planificar-estrategia-exito-disfrutan-trabajo-equipo-pequena-moderna-oficina-nocturna_7861-2386.jpg'
                            title='Servicios transitorios'
                            desc='Dotamos a tu organización de personas para que tu operación no se detenga, con la velocidad y precisión que nos caracteriza, y con toda la simplicidad de requerir el talento a un solo clic de distancia.'
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard
                            img='https://image.freepik.com/foto-gratis/empresarios-mujeres-negocios-milenio-asia-encuentran-ideas-lluvia-ideas-sobre-nuevos-colegas-proyecto-papeleo-que-trabajan-juntos-planificar-estrategia-exito-disfrutan-trabajo-equipo-pequena-moderna-oficina-nocturna_7861-2386.jpg'
                            title='Outsourcing/BPO'
                            desc='Externalizamos funciones o procesos completos de tu organización de forma que puedas focalizarte en tu negocio.'
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
