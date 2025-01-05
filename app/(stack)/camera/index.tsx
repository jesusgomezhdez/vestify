import { View, Text } from "react-native";
import { Redirect, useRouter } from "expo-router";
import { useCameraDevice, useCameraPermission } from "react-native-vision-camera";

export default function CameraScreen() {
  const {hasPermission} = useCameraPermission()
  const device = useCameraDevice('back')
  const router = useRouter()

  const redirectToPermissions = !hasPermission

  if(redirectToPermissions) return <Redirect href="/permissions" />

  if(!device) return <Text>No device</Text>
  return(
    <View>
      <Text>Camera</Text>
    </View>
  )
}