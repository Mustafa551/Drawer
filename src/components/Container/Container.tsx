import React from 'react';
import {View} from 'react-native';
import {styling} from './styles';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const Container = ({
  children,
  mH = true,
}: {
  children: React.ReactElement;
  mH?: boolean;
}) => {
  const progress = useDrawerProgress();

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {perspective: 1000},
  //     {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
  //     {
  //       rotate: `${interpolate(progress.value, [0, 1], [0, 5], 'clamp')}deg`,
  //     },
  //     {
  //       translateX: interpolate(progress.value, [0, 1], [0, 30], 'clamp'),
  //     },
  //     // {
  //     //   rotateX: `${interpolate(progress.value, [0, 1], [0, 0.6], 'clamp')}deg`,
  //     // },
  //   ],
  //   borderRadius: interpolate(progress.value, [0, 1], [5, 20], 'extend'),
  //   overflow: 'hidden',
  // }));

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {perspective: 1000},
  //     {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
  //     {
  //       rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
  //     },
  //     {
  //       rotateX: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
  //     },
  //     {
  //       translateY: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
  //     },
  //     {
  //       translateX: interpolate(progress.value, [0, 1], [0, 10], 'clamp'),
  //     },
  //   ],
  //   borderRadius: interpolate(progress.value, [0, 1], [5, 20], 'extend'),
  //   overflow: 'hidden',
  // }));
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      },
      {
        rotateX: `${interpolate(progress.value, [0, 1], [0, 0.6], 'clamp')}deg`,
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [5, 20], 'extend'),
    overflow: 'hidden',
  }));
  return (
    <Animated.View
      // onStartShouldSetResponder={() => true}
      style={[
        styling.container,
        {paddingHorizontal: mH ? 20 : 0},
        animatedStyle,
      ]}>
      {children}
    </Animated.View>
  );
};

export default Container;
