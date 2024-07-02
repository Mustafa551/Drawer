import {StyleSheet} from 'react-native';
import {COMMON_COLORS} from '../../assets/theme';

export const styling = StyleSheet.create({
  drawerStyle: {
    backgroundColor: COMMON_COLORS.blueBayoux,
    flex: 1,
    width: '60%',
  },

  sceneContainerStyle: {
    backgroundColor: COMMON_COLORS.blueBayoux,
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: COMMON_COLORS.white,
    marginTop: 15,
    marginBottom: 15,
  },

  divider: {
    height: 2,
    width: '70%',
    backgroundColor: COMMON_COLORS.white,
    borderRadius: 5,
    marginTop: 5,
  },

  iconCont: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COMMON_COLORS.white,
    paddingLeft: 5,
  },
});
