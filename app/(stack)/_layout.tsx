import { Stack } from "expo-router";

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
      <Stack.Screen name="home/index" options={{  title: 'Vestify' }} />
      <Stack.Screen name="camera/index" options={{  title: 'Camera' }} />
      <Stack.Screen name="permissions/index" options={{  presentation: 'modal', headerTitle: 'Permisos' }} />
    </Stack>
  )
}
