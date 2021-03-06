import React from 'react';
import Button from 'wix-style-react/Button';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px'
};

export default () =>
  <div>
    <div style={style}>Main<br/><Button theme="fullpurple">Click Me!</Button></div>
    <div style={style}>Secondary<br/><Button theme="emptypurple">Click Me!</Button></div>
  </div>;
