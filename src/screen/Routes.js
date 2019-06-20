import {createStackNavigator} from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

const navigate = createStackNavigator({
    Home: { screen: Home},
    Detail: { screen: Detail}
});
export default navigate;