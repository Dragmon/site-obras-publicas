import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components';

const ContGraphic = styled.div`
  height: 80vh;
  margin: 0 auto;
`;

const theme = {
  fontSize: 14,
  tooltip: {
    container: {
      background: 'rgba(51, 51, 51, 0.9)',
      color: '#fff',
      fontSize: '14px',
      borderRadius: '0',
      boxShadow: 'none',
      padding: '10px 14px',
    },
  },
};

const index = (parm) => {
  console.log('parm', parm);
  const myData = parm.graficData;
  const dataArray = [];

  myData.forEach((element, index) => {
    const objectArray = {};
    objectArray.id = index + 1;
    objectArray.percentage = element.porcentaje_avance;
    objectArray.labels = `${objectArray.id} - ${element.ct_tramo_carretero.nombre}`;
    dataArray.push(objectArray);
  });

  console.log('dataArray', dataArray);

  return (
    <ContGraphic>
      <ResponsiveBar
        data={dataArray}
        indexBy='labels'
        keys={['percentage']}
        margin={{ top: 20, right: 20, bottom: 50, left: 180 }}
        labelTextColor='#FFFFFF'
        padding={0.3}
        minValue={0}
        maxValue={100}
        valueScale={{ type: 'linear' }}
        colors={{ scheme: 'dark2' }}
        layout='horizontal'
        isInteractive={true}
        theme={theme}
        tooltip={(node) => (
          <div>
            <p>Avance de la obra {node.value}%</p>
          </div>
        )}
      />
    </ContGraphic>
  );
};

export default index;
