import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SVG} from '../../assets/svg';
import {COMMON_COLORS} from '../../assets/theme';
import {Container} from '../../components';
import CartScreen from '../../screens/CartScreen/CartScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import NotifcationScreen from '../../screens/NotificationScreen/NotifcationScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {styling} from './styles';
const Tab = createBottomTabNavigator();

const BOTTOM_TABS = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    svg: SVG.Home,
    initialParams: {},
  },
  {
    name: 'NotifcationScreen',
    component: NotifcationScreen,
    svg: SVG.Notification,
    initialParams: {tabIndex: 0},
  },
  {
    name: 'CartScreen',
    component: CartScreen,
    svg: SVG.Filter,
    initialParams: {},
  },

  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    svg: SVG.User2,
    initialParams: {},
  },
];

const BottomNavigation = () => {
  const styles = styling;
  return (
    <Container mH={false}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.tabStyle],
          tabBarActiveTintColor: COMMON_COLORS.white,
          tabBarInactiveTintColor: COMMON_COLORS.glacier,
          tabBarHideOnKeyboard: true,
        }}>
        {BOTTOM_TABS.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            initialParams={item.initialParams}
            options={{
              tabBarIcon: ({focused}) => (
                <item.svg
                  width={25}
                  height={25}
                  fill={focused ? COMMON_COLORS.blueBayoux : COMMON_COLORS.grey}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        ))}
      </Tab.Navigator>
    </Container>
  );
};

export default BottomNavigation;
