import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/context';
import Pie3D from './charts/Pie3D';
import Column3D from './charts/Column3D';
import Bar3D from './charts/Bar3D';
import Doughnut2d from './charts/Doughnut2D';



const Repos = () => {
 
  return(
    <section className="section">
        <Wrapper className="section-center">
          <Pie3D/>
          <Column3D/>
          <Doughnut2d/>
          <Bar3D/>
        </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;