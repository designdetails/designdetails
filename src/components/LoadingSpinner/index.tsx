import React from 'react';
import Donut from './Donut';

interface Props {
  style: Record<string, string>;
}

export default ({ style }: Props) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      ...style,
    }}
  >
    <Donut />
  </div>
);
