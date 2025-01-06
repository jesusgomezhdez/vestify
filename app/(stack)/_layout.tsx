import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return(
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        //headerBackTitle: ''
        //headerBackVis'ible: false,
      }}
    >
      <Stack.Screen 
        name="home/index" 
        options={{ 
          title: 'Vestify',
        }} 
      />
      <Stack.Screen 
        name="camera/index" 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="permissions/index" 
        options={{ 
          presentation: 'modal', 
          headerTitle: 'Permisos',
          headerShown: false
        }} 
      />
    </Stack>
  )
}
