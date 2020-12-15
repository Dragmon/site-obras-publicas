import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FirstData } from '../graphql/getQueries.js';
import GraficBarNivo from '../components/GraficBarNivo';
import Loading from '../components/Loading';
import Page from '../container/Page';
import Dropdown from '../components/DropDown';
import Report from '../components/Report';
import ProjectList from '../components/ProjectList';
import styled from 'styled-components';
import { FlexMixin } from '../components/styles/Mixins';

const ContFilter = styled.section`
  ${FlexMixin}
  margin: 30px 0;
  & h4 {
    margin: 0 10px 0;
  }
`;

const Title = styled.div`
  text-align: center;
`;

const Home = () => {
  const { loading, error, data } = useQuery(FirstData);
  const [selectCoordinacion, setCoordination] = useState('');

  function handleChangeCoordination(newValue) {
    setCoordination(newValue);
  }

  console.log('data', data);
  if (loading) return <Loading />;
  if (error) return <p>`Error :(`</p>;

  return (
    <Page>
      <ContFilter>
        <h4>Coordinación regional</h4>
        <Dropdown
          dataFilter={data.ctCoordinacionRegionals}
          onChange={handleChangeCoordination}
        />
      </ContFilter>
      {console.log('selectCoordinacion', selectCoordinacion)}
      {selectCoordinacion !== '' ? (
        <Report parm={selectCoordinacion} />
      ) : (
        <>
          <Title>
            <h3> Grafica de avance de obras en la república mexicana </h3>
          </Title>
          <GraficBarNivo graficData={data.reportesConnection.values} />
          <ProjectList info={data.reportesConnection.values} />
        </>
      )}
    </Page>
  );
};

export default Home;
