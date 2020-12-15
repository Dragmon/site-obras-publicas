import React from 'react';
import GraficPie from '../GraficPie';
import styled from 'styled-components';
import { Card } from 'antd';

const ContentCard = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px 0;
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
const DataCard = styled(Card)`
  border: 1px solid #d2c7c7;
  margin: 0 0 5px 0;
`;
const TitleCard = styled.h3`
  color: ${(props) => props.theme.colors.purple};
`;
const DataParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mSmall};
`;

const index = (props) => {
  const dataCard = props.data;
  console.log('dataCard', dataCard);
  return (
    <ContentCard>
      {dataCard.map((data) => (
        <DataCard
          key={data.id}
          title={<TitleCard>{data.ct_tramo_carretero.nombre}</TitleCard>}
        >
          <GraficPie info={data} />
          <DataParagraph>
            <strong>Descripción de la obra:</strong> {data.descripcion}
          </DataParagraph>
          <DataParagraph>
            <strong>Fecha de inicio:</strong> {data.fecha_inicio}
          </DataParagraph>
          <DataParagraph>
            <strong>Fecha de fin:</strong> {data.fecha_fin}
          </DataParagraph>
          <DataParagraph>
            <strong>Porcentaje de avance:</strong> {data.porcentaje_avance}%
          </DataParagraph>
        </DataCard>
      ))}
    </ContentCard>
  );
};

export default index;
