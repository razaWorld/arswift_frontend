import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/routes';
import { colors } from './theme';
const App = () => {
  return (
    <NavigationContainer>
      {/* Status bar configuration */}
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.background} 
      />

      {/* All navigation flows */}
      <Routes />
    </NavigationContainer>
  );
};

export default App;
