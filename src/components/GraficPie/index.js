import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import styled from 'styled-components';

const ContGraphic = styled.div`
  height: calc(400px * 0.8);
  width: 100%;
`;

const index = (data) => {
  const myData = data.info;
  const workProgress = 'Avance de obra';
  const workRemaning = 'Restante de obra';
  const dataArray = [];
  const progressArray = {};
  const remaningArray = {};
  progressArray.id = workProgress;
  progressArray.value = myData.porcentaje_avance;
  remaningArray.id = workRemaning;
  remaningArray.value = 100 - myData.porcentaje_avance;

  dataArray.push(progressArray);
  dataArray.push(remaningArray);

  console.log('dataArray', dataArray);

  return (
    <ContGraphic>
      <ResponsivePie
        data={dataArray}
        margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'dark2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor='#171616'
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor='#171616'
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 45,
            itemWidth: 120,
            itemHeight: 20,
            itemsSpacing: 0,
            symbolSize: 20,
            itemDirection: 'left-to-right',
          },
        ]}
      />
    </ContGraphic>
  );
};

export default index;
