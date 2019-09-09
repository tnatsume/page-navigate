import {
    createAppContainer,
    // createBottomTabNavigator,
}from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// ローカルインポート
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import ThirdScreen from '../screens/ThirdScreen';

// 起動画面
const Start = {
    screen: StartScreen,
    navigationOptions:({navigation}) =>{
        return {title: '起動画面',}
    },
}
//　ホーム画面
const Home = {
    screen: HomeScreen ,
    navigationOptions:({navigation}) =>{
        return  {title: 'ホーム画面'}
    },
}

// サード画面
const Third = {
    screen: ThirdScreen,
    navigationOptions:({navigation}) =>{
        return  {title: 'サード画面'}
    },
}

const MainNavigation = createStackNavigator({
    Start,
    Home,
    Third,
},{
    mode:'card',

    initialRouteName:'Start',//　最初に表示させる画面を設定

},
)

export default AppNavigator = createAppContainer(MainNavigation);