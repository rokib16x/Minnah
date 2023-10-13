import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen"
import ZakatCalculator from './Screen/ZakatCalculator';
import QuranChapters from "./Screen/QuranChapters";
import ChapterId from "./Screen/ChapterId";
import TasbihScreen from "./Screen/Tasbih";
import Donation from "./Screen/DonationMain";
import MapScreen from './Screen/MapScreen';
import PaymentGatewayScreen from "./Screen/Payment";
import WebViewScreen from './Screen/WebViewScreen';
import FeedbackScreen from './Screen/FeedbackScreen'; 
import SalahTimingScreen from "./Screen/SalahTimingScreen";
import AsmaAlHusnaScreen from "./Screen/AsmaAlHusnaScreen"; 
import IslamicQuizAndGamesScreen from './Screen/Quiz';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ZakatCalculator" component={ZakatCalculator} />
        <Stack.Screen name="Donation" component={Donation} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        <Stack.Screen name="QuranChapters" component={QuranChapters} />
        <Stack.Screen name="ChapterId" component={ChapterId} />
        <Stack.Screen name="TasbihScreen" component={TasbihScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="SalahTimingScreen" component={SalahTimingScreen} />
        <Stack.Screen name="Payment" component={PaymentGatewayScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} /> 
        <Stack.Screen name="Game" component={IslamicQuizAndGamesScreen} /> 
        <Stack.Screen name="AsmaAlHusnaScreen" component={AsmaAlHusnaScreen} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
