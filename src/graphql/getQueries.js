import { gql } from '@apollo/client';

export const FirstData = gql`
  query getRepostesConection {
    reportesConnection(where: { Activo: true }) {
      values {
        id
        Activo
        descripcion
        fecha_inicio
        fecha_fin
        porcentaje_avance
        ct_tramo_carretero {
          nombre
        }
        ct_coordinacion_regional {
          name
        }
      }
    }
    ctCoordinacionRegionals {
      id
      name
    }
  }
`;

export const ReportCoordination = gql`
  query getReportCoordination($name: String!) {
    ctCoordinacionRegionals(where: { name: $name }) {
      id
      name
      reportes {
        id
        descripcion
        fecha_inicio
        fecha_fin
        porcentaje_avance
        ct_tramo_carretero {
          nombre
        }
      }
    }
  }
`;
