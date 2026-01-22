import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PanelSelectionScreen from '../screens/PanelSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F3F4F6' } }}>
            <Stack.Screen name="PanelSelection" component={PanelSelectionScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

            {/* Admin */}
            <Stack.Screen name="AdminLogin" component={LoginScreen} initialParams={{ title: "Admin", panel: "Admin Panel", dashboardScreen: "PanelSelection" }} />
            <Stack.Screen name="AdminRegister" component={RegisterScreen} initialParams={{ title: "Admin", panel: "Admin Panel" }} />

            {/* Driver */}
            <Stack.Screen name="DriverLogin" component={LoginScreen} initialParams={{ title: "Driver", panel: "Driver Panel", dashboardScreen: "PanelSelection" }} />
            <Stack.Screen name="DriverRegister" component={RegisterScreen} initialParams={{ title: "Driver", panel: "Driver Panel" }} />

            {/* Provider */}
            <Stack.Screen name="ProviderLogin" component={LoginScreen} initialParams={{ title: "Provider", panel: "Provider Panel", dashboardScreen: "PanelSelection" }} />
            <Stack.Screen name="ProviderRegister" component={RegisterScreen} initialParams={{ title: "Provider", panel: "Provider Panel" }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
