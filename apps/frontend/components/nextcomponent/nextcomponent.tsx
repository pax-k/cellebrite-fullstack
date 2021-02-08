import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NextcomponentProps {}

const StyledNextcomponent = styled.div`
  color: pink;
`;

export function Nextcomponent(props: NextcomponentProps) {
  return (
    <StyledNextcomponent>
      <h1>Welcome to nextcomponent!</h1>
    </StyledNextcomponent>
  );
}

export default Nextcomponent;
