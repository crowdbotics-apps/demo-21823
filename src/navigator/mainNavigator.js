import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList155321Navigator from '../features/ArticleList155321/navigator';
import Maps155308Navigator from '../features/Maps155308/navigator';
import UserProfile155294Navigator from '../features/UserProfile155294/navigator';
import Tutorial155293Navigator from '../features/Tutorial155293/navigator';
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
ArticleList155321: { screen: ArticleList155321Navigator },
Maps155308: { screen: Maps155308Navigator },
UserProfile155294: { screen: UserProfile155294Navigator },
Tutorial155293: { screen: Tutorial155293Navigator },
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
