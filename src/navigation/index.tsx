import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="DrawerNavigation"
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = ({navStack}: {navStack: string}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={navStack}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeStack"
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootNavigator navStack={'HomeStack'} />
    </NavigationContainer>
  );
}
