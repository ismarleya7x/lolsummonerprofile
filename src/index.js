import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Possible Unhandled Promise Rejection (id: 0):'
])

import Routes from './routes';

export default function App(){
  return (
    <Routes />    
  );
};
