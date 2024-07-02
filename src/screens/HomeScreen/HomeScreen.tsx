import React from 'react';
import {View} from 'react-native';
import {COMMON_COLORS} from '../../assets/theme';
import {Header} from '../../components';

const HomeScreen = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: COMMON_COLORS.white,
      }}>
      <Header title="Home" />
    </View>
  );
};

export default HomeScreen;
