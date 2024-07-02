import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {HEIGHT, WIDTH} from '../../utils/size';

interface IStyle {
  container: ViewStyle;
  linearGradient: ViewStyle;
  initialBGCont: ImageStyle;
}

export const styling = StyleSheet.create<IStyle>({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  initialBGCont: {flex: 1, height: HEIGHT * 0.7, width: WIDTH},

  linearGradient: {flex: 1},
});
