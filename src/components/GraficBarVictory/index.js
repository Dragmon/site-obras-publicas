import React from 'react';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory';
import { GraficSection } from '../styles/GraficBar';
/* import styled from 'styled-components'; */

/* const DataDiv = styled.div`
  border: 1px solid #000;
  margin: 0 0 5px 0;
  padding: 5px 10px;
`; */

const index = (data) => {
  console.log('graficData', data.graficData);
  console.log('graficData length', data.graficData.length);

  const myData = data.graficData;
  const dataArray = [];

  myData.forEach((element, index) => {
    const objectArray = {};
    objectArray.id = index + 1;
    objectArray.percentage = element.porcentaje_avance;
    objectArray.labels = element.ct_tramo_carretero.nombre;
    dataArray.push(objectArray);
  });

  console.log('dataArray', dataArray);

  return (
    <GraficSection>
      <VictoryChart
        horizontal
        theme={VictoryTheme.material}
        domainPadding={10}
        domain={{ y: [0, 100] }}
        width={200}
      >
        <VictoryBar
          data={dataArray}
          x='labels'
          y='percentage'
          labels={true}
          labelComponent={
            <VictoryLabel
              angle={360}
              verticalAnchor='middle'
              textAnchor='start'
              text={({ datum }) => [`${datum.percentage}%`]}
            />
          }
          style={{
            data: { fill: '#c43a31' },
            labels: { fontSize: 6, fill: 'black' },
          }}
        />
      </VictoryChart>
      {/* <div>
        {myData.map((data) => (
          <DataDiv key={data.id}>
            <p>Coordinación Regional: {data.ct_coordinacion_regional.name}</p>
            <p>Tramo Carretero: {data.ct_tramo_carretero.nombre}</p>
            <p>Descripción de la obra: {data.descripcion}</p>
            <p>Fecha de inicio: {data.fecha_inicio}</p>
            <p>Fecha de fin: {data.fecha_fin}</p>
          </DataDiv>
        ))}
      </div> */}
    </GraficSection>
  );
};

export default index;
