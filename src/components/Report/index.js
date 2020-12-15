import React from 'react';
import Loading from '../Loading';
/* import GraficBarNivo from '../GraficBarNivo'; */
import WorkCard from '../WorkCard';
import { useQuery } from '@apollo/client';
import { ReportCoordination } from '../../graphql/getQueries';

const index = (props) => {
  console.log('props', props);
  const name = props.parm;
  const { loading, error, data } = useQuery(ReportCoordination, {
    variables: { name },
  });
  console.log('data', data);

  if (loading) return <Loading />;
  if (error) return <p>`Error :(`</p>;
  if (data) {
    const arrayData = data.ctCoordinacionRegionals[0].reportes;
    console.log('arrayData', arrayData);
    return (
      <>
        {/* <GraficBarNivo graficData={arrayData} /> */}
        <WorkCard data={arrayData} />
      </>
    );
  }
};

export default index;
