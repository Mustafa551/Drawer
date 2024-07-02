import {StyleSheet} from 'react-native';
import {COMMON_COLORS} from '../../assets/theme';

export const styling = StyleSheet.create({
  tabStyle: {
    backgroundColor: COMMON_COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopColor: COMMON_COLORS.blueBayoux,
    borderLeftColor: COMMON_COLORS.blueBayoux,
    borderRightColor: COMMON_COLORS.blueBayoux,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 100,
    marginTop: -20,
    paddingBottom: 30,
    paddingTop: 12,
  },
});
