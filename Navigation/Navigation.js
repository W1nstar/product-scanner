import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeStackNavigator from "./HomeStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import MyBasketsStackNavigator from "./MyBasketsStackNavigator";

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
                title: 'Accueil',
            }
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                // title: 'Recherche',
                drawerLabel: () => null
            }
        },
        History: {
            screen: HistoryStackNavigator,
            navigationOptions: {
                title: 'Mes scans'
            }
        },
        MyCarts: {
            screen: MyBasketsStackNavigator,
            navigationOptions: {
                title: 'Mes paniers'
            }
        },
        Profile: {
            screen: ProfileStackNavigator,
            navigationOptions: {
                title: 'Mon profil',
            }
        },
    }, {
        contentOptions: {
            activeTintColor: '#00C378'
        }
    }
);

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
