import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList155265Navigator from '../features/NotificationList155265/navigator';
import Settings155264Navigator from '../features/Settings155264/navigator';
import Settings155256Navigator from '../features/Settings155256/navigator';
import UserProfile155254Navigator from '../features/UserProfile155254/navigator';
import Settings155218Navigator from '../features/Settings155218/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList155265: { screen: NotificationList155265Navigator },
Settings155264: { screen: Settings155264Navigator },
Settings155256: { screen: Settings155256Navigator },
UserProfile155254: { screen: UserProfile155254Navigator },
Settings155218: { screen: Settings155218Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
