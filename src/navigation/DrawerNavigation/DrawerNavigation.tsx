/* eslint-disable react/react-in-jsx-scope */
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../assets/images';
import {SVG} from '../../assets/svg';
import {COMMON_COLORS, STYLES} from '../../assets/theme';
import CartScreen from '../../screens/CartScreen/CartScreen';
import NotifcationScreen from '../../screens/NotificationScreen/NotifcationScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import {styling} from './styles';

const Drawer = createDrawerNavigator();

const DRAWER_SCREENS = [
  {
    name: 'BottomNavigation',
    comp: BottomNavigation,
    icon: SVG.Home,
    title: 'Home',
  },
  {
    name: 'NotifcationScreen',
    comp: NotifcationScreen,
    icon: SVG.Notification,
    title: 'Notification',
  },
  {
    name: 'CartScreen',
    comp: CartScreen,
    icon: SVG.Filter,
    title: 'Filter',
  },
  {
    name: 'ProfileScreen',
    comp: ProfileScreen,
    icon: SVG.User,
    title: 'Profile',
  },
  {
    name: 'SettingScreen',
    comp: SettingScreen,
    icon: SVG.Setting,
    title: 'Setting',
  },
];

const CustomDrawerContent = () => {
  const styles = styling;

  const navigation = useNavigation() as any;

  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={STYLES.flex1}>
      <View style={[STYLES.pH(20), STYLES.mT(25)]}>
        <View style={[STYLES.rowCenter, STYLES.mV(20), STYLES.JCCenter]}>
          <Image
            style={{width: 55, height: 55, borderRadius: 50, marginRight: 10}}
            resizeMode="contain"
            source={IMAGES.avatar}
          />

          <View style={[STYLES.flex1, STYLES.JCCenter]}>
            <Text style={styles.title}>Muhammad Mustafa</Text>
            <Text style={styles.email}>mohammadmustafa551@gmail.com</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        {DRAWER_SCREENS.map((val, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(val.name)}
            activeOpacity={0.7}
            style={[STYLES.rowCenter, STYLES.mT(20), STYLES.mB(5)]}>
            <View style={styles.iconCont}>
              <val.icon fill={COMMON_COLORS.white} />
            </View>
            <Text style={styles.drawerTitle}>{val.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  const styles = styling;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        headerShown: false,
        drawerStyle: styles.drawerStyle,
        sceneContainerStyle: [styles.sceneContainerStyle],
      }}
      drawerContent={(props: any) => {
        return <CustomDrawerContent {...props} />;
      }}>
      {DRAWER_SCREENS.map((val, index) => (
        <Drawer.Screen key={index} name={val.name} component={val.comp} />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
