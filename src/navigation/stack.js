import React from "react";
import PaymentScreen from "../screens/PaymentScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RequestPaymentScreen from "../screens/RequestPaymentRequest";
import MakePaymentScreen from "../screens/MakePaymentScreen";
const Stack = createStackNavigator()
export default function PaymentStackNavigator(){
    return(
        <Stack.Navigator initialRoutName="PaymentScreen"   screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="RequestPaymentScreen" component={RequestPaymentScreen} />
        <Stack.Screen name="MakePaymentScreen" component={MakePaymentScreen} />

     </Stack.Navigator>
    )
}