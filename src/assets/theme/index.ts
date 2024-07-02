import {Dimensions, StyleSheet} from 'react-native';
import {FlexAlignType} from 'react-native/types';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export const COMMON_COLORS = {
  transparent: 'transparent',
  black: '#000000',
  lightBlack: '#2C2C2C',
  white: '#fff',
  glassBlack: 'rgba(0,0,0,0.6)',
  glassBlack2: 'rgba(0,0,0,0.8)',
  primary: '#1F5764',
  primaryLight: 'rgba(62, 140, 154, 0.5)',

  placeholderBlack: 'rgba(0,0,0,0.5)',
  alto: '#D9D9D9',
  porcelain: '#E2E6E7',
  Geyser: '#E0E6E7',
  mercury: '#E6E6E6',
  secondary: '#3E8C9A',
  secondaryLight: 'rgba(62, 140, 154, 0.5)',
  secondaryDividerLight: 'rgba(62, 140, 154, 0.2)',
  glacier: '#8BBBC9',
  lightGray: '#F1F1F1',
  dodgerBlue: '#4355FA',
  green: '#74A148',
  altoArray: ['#D9D9D9', '#D9D9D9'],

  gradientArray: ['#1F5764', '#3E8C9A'],
  disableGradientArray: ['rgba(31, 87, 100, 0.5)', 'rgba(62, 140, 154, 0.6)'],
  transparentArray: ['transparent', 'transparent'],
  filledArray: ['#3E8C9A', '#3E8C9A'],
  disableFilledArray: ['rgba(62, 140, 154, 0.6)', 'rgba(62, 140, 154, 0.6)'],
  textGradientArray: ['#1F5764', 'rgba(62, 140, 154, 0.58)'],
  dividerGradientArray: ['#EFF7EF', 'rgba(255, 255, 255, 0)', '#EFF7EF'],
  backgroundGradientArray: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
  lightGradientArray: ['#fff', 'rgba(255, 255, 255, 0.9)'],
  drawerTextGradientArray: [
    'rgba(255, 255, 255, 0.57)',
    'rgba(255, 255, 255, 0.1)',
  ],
  redArray: ['#E23F3F', '#E23F3F'],
  redLightArray: ['#D15959', '#D15959'],
  chatBubbleColor: '#1C1955',
  chatGreyColor: '#F4F3F6',

  transparentWhite: 'rgba(255,255,255,0.9)',
  dark: '#122704',
  bgColor: '#fff',
  orange: '#FFB400',
  red: '#E23F3F',
  redLight: 'rgba(235, 64, 64, 0.1)',
  greyGreen: '#99AE8B',
  border: '#E8F1DF',
  grey: '#BDBDBD',
  grayGreenLight: 'rgba(54, 137, 4, 0.15)',
  leaveGreen: '#CBEEB3',
  lightGreen: '#E8F1DF',
  disabled: '#DCDCDC',
  zanah: '#E2EEDB',
  lightRed: '#E87A7A',
  nobel: '#B3B3B3',
  blueBayoux: '#476175',
  shineGreen: '#0EAB43',
  defaultGrey: '#D4D4D4',
  whiteGlass: 'rgba(255,255,255,0.2)',
};

export const COLORS = {
  light: {
    ...COMMON_COLORS,
  },
  dark: {
    ...COMMON_COLORS,
  },
};

// RenderList Global Styles
export const STYLES = StyleSheet.create<any>({
  AICenter: {alignItems: 'center'},
  AIEnd: {alignItems: 'flex-end'},
  AIStart: {alignItems: 'flex-start'},
  JCAround: {justifyContent: 'space-around'},
  JCBt: {justifyContent: 'space-between'},
  JCCenter: {justifyContent: 'center'},
  JCEnd: {justifyContent: 'flex-end'},
  JCEvenly: {justifyContent: 'space-evenly'},
  JCStart: {justifyContent: 'flex-start'},
  alignSelf: (alignSelf: FlexAlignType) => ({alignSelf}),
  bR: (bR: number) => ({borderRadius: bR}),
  bgColor: (backgroundColor: string) => ({backgroundColor}),
  borderBottomLeftRadius: (borderBottomLeftRadius: number) => ({
    borderBottomLeftRadius,
  }),
  borderBottomRightRadius: (borderBottomRightRadius: number) => ({
    borderBottomRightRadius,
  }),
  borderTopLeftRadius: (borderTopLeftRadius: number) => ({
    borderTopLeftRadius,
  }),
  borderTopRightRadius: (borderTopRightRadius: number) => ({
    borderTopRightRadius,
  }),
  borderColor: (borderColor: string) => ({borderColor}),
  borderWidth: (borderWidth: number) => ({borderWidth}),
  bottom: (bottom: number) => ({bottom}),
  centerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: (color: string) => ({color}),
  flex: (flex: number) => ({flex}),
  flex1: {flex: 1},
  flexGrow: (flexGrow: number) => ({flexGrow}),
  flexWrap: (wrap: string) => ({flexWrap: wrap}),
  fontFamily: (family: string) => ({fontFamily: family}),
  fontSize: (fontSize: number) => ({fontSize}),
  fontStyle: (style: string) => ({fontStyle: style}),
  fontWeight: (size: number) => ({fontWeight: size}),
  fullWidth: {width: '100%'},
  height: (height: string | number = '0%') => ({height}),
  hitSlop: {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  },
  jcStart: {justifyContent: 'flex-start'},
  left: (left: number) => ({left}),

  lineHeight: (lineHeight: number) => ({lineHeight}),
  mB: (marginBottom: number) => ({marginBottom}),
  mH: (marginHorizontal: number) => ({marginHorizontal}),
  mL: (marginLeft: number) => ({marginLeft}),
  mR: (marginRight: number) => ({marginRight}),
  mT: (marginTop: number) => ({marginTop}),
  mV: (marginVertical: number) => ({marginVertical}),
  margin: (margin: number) => ({margin}),
  maxHeight: (maxHeight: number) => ({maxHeight}),
  middle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  minHeight: (minHeight: number) => ({minHeight}),
  modalShadow: {
    elevation: 18,
    shadowColor: COMMON_COLORS.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,

    shadowRadius: 11.95,
  },

  opacity: (opacity: number) => ({opacity}),
  pB: (paddingBottom: number) => ({paddingBottom}),
  pH: (paddingHorizontal: number) => ({paddingHorizontal}),
  pL: (paddingLeft: number) => ({paddingLeft}),
  pR: (paddingRight: number) => ({paddingRight}),
  pT: (paddingTop: number) => ({paddingTop}),
  pV: (paddingVertical: number) => ({paddingVertical}),
  padding: (padding: number) => ({padding}),
  position: (position: number) => ({position}),
  right: (right: number) => ({right}),
  row: {flexDirection: 'row'},
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowCenterBt: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  selfCenter: {alignSelf: 'center'},
  selfLeft: {alignSelf: 'flex-start'},

  selfRight: {alignSelf: 'flex-end'},

  shadow: {
    elevation: 5,
    shadowColor: COMMON_COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  spbw: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textAlign: (align: string) => ({textAlign: align}),

  textDecorationLine: (textDecorationLine: string) => ({
    textDecorationLine,
  }),

  textTransform: (textTransform: string) => ({
    textTransform,
  }),

  top: (top: number) => ({top}),
  display: (display: string) => ({display}),

  width: (width: string | number = '0%') => ({width}),
  width100: {
    width: '100%',
  },

  widthHeight: (width = 0, height = 0) => ({width, height}),
  zIndex: (zIndex: number) => ({zIndex}),
});
