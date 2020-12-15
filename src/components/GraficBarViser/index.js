import React from 'react';
import { Chart, Tooltip, Axis, Bar, Coord, Legend } from 'viser-react';
const DataSet = require('@antv/data-set');

const index = (data) => {
  const myData = data.graficData;
  const dataArray = [];

  myData.forEach((element, index) => {
    const objectArray = {};
    objectArray.id = index + 1;
    objectArray.percentage = element.porcentaje_avance;
    objectArray.labels = `${objectArray.id} - ${element.ct_tramo_carretero.nombre}`;
    dataArray.push(objectArray);
  });

  const dv = new DataSet.View().source(dataArray);
  dv.transform({
    type: 'map',
    callback(row) {
      row.range = [0, 100];
      return row;
    },
  });
  const dataGraphic = dv.rows;

  return (
    <>
      <Chart
        forceFit
        height={500}
        padding={[20, 80, 50, 200]}
        data={dataGraphic}
      >
        <Coord type='rect' direction='LB' />
        <Tooltip />
        <Legend />
        <Axis dataKey='id' label={{ offset: 12 }} />
        <Bar position='labels*percentage' />
      </Chart>
    </>
  );
};

export default index;
