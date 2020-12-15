import React from 'react';
import styled from 'styled-components';
import { List, Card } from 'antd';

const DataCard = styled(Card)`
  border: 1px solid #d2c7c7;
  margin: 0 0 5px 0;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    min-height: 350px;
  }
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    min-height: 300px;
  }
`;
const TitleCard = styled.p`
  white-space: normal;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.purple};
  @media (min-width: ${(props) => props.theme.sizeDevice.lg}) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
const DataParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mSmall};
`;

const index = (data) => {
  const infoList = data.info;
  console.log('infoList', infoList);
  return (
    <>
      <h4>Lsita de proyectos</h4>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={infoList}
        renderItem={(item) => (
          <List.Item>
            <DataCard
              title={
                <TitleCard>{`${item.ct_coordinacion_regional.name} : ${item.ct_tramo_carretero.nombre}`}</TitleCard>
              }
            >
              <DataParagraph>{item.descripcion}</DataParagraph>
              <DataParagraph>
                <strong>Porcentaje de avance dela obra: </strong>
                {item.porcentaje_avance}%
              </DataParagraph>
            </DataCard>
          </List.Item>
        )}
      />
    </>
  );
};

export default index;
