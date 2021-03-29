import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {AvTimer, AspectRatio, PersonAdd, EmojiTransportation, Storage} from "@material-ui/icons";
import PanToolIcon from '@material-ui/icons/PanTool';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div id='nosotros' className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>¿Qué hacemos diferente?</h2>
          <h5 className={classes.description}>
           En Clear People queremos aportar a la creación de un mundo mejor desde las estrategias de atracción de talento para las empresas y el apoyo del desarrollo profesional para las personas.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Eficiencia"
              description="Constantemente estamos realizando mejoras de procesos en todos nuestros servicios para que tengas las mejores prácticas, herramientas y calidad."
              icon={AvTimer}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Innovación"
              description="Desarrollamos continuamente procesos de definición de desafíos y transferencia tecnológica para entregar nuevas formas de servicios."
              icon={AspectRatio}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Experiencia de Candidatos"
              description="Nos preocupamos que nuestros servicios agreguen valor a tu marca empleadora, de forma que cada proceso de postulación sea un experiencia positiva."
              icon={PersonAdd}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Experiencia de Clientes"
              description="Nuestro foco es apoyar tu negocio, por eso utilizamos todas nuestras herramientas para focalizamos a tus metas no en nuestros procesos."
              icon={EmojiTransportation}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Basados en datos"
              description="Proponemos a nuestros clientes el uso de datos y evidencia para la toma de decisiones, evitando de esta forma perder oportunidades por prejuicios o políticas que no están alineadas con la optimización del Talento."
              icon={Storage}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Transparentes y responsables"
              description="La sociedad hoy exige niveles de transparencia extremadamente altos, ser muy cuidadosos con la privacidad de la información y basarse en información obejtiva para tomar decisiones de contratación, en Clear People estamos 100% preparados para eso."
              icon={PanToolIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
