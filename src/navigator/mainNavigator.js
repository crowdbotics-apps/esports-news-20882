import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList117894Navigator from '../features/ArticleList117894/navigator';
import ArticleList117893Navigator from '../features/ArticleList117893/navigator';
import ArticleList117892Navigator from '../features/ArticleList117892/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList117894: { screen: ArticleList117894Navigator },
ArticleList117893: { screen: ArticleList117893Navigator },
ArticleList117892: { screen: ArticleList117892Navigator },

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
