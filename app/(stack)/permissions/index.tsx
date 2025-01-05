import { useState } from "react";
import { Text, View, Switch, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraPermissionStatus } from "react-native-vision-camera";
import { Camera as CameraIcon, MoveRight } from "lucide-react-native";
import { router } from "expo-router";

export default function PermissionsScreen() {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState<CameraPermissionStatus>('not-determined');

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      Alert.alert('Permiso denegado', 'Por favor, ve a la configuración de tu dispositivo y otorga el permiso de cámara para continuar.');
    } else {
      setCameraPermissionStatus(permission);
    }
  }

  const handleContinue = () => {
    if (cameraPermissionStatus === 'granted') {
      router.replace('/permissions');
    } else {
      Alert.alert('Permiso denegado', 'Por favor, ve a la configuración de tu dispositivo y otorga el permiso de cámara para continuar.');
    }
  }
 
  return(
      <View className="flex-1 m-3">
        <Text className="text-center text-3xl font-outfit-bold text-black">Vestify necesita acceso a algunos permisos para funcionar correctamente.</Text>
        <View className="flex-row mt-6 items-center gap-2 bg-gray-200 p-4 rounded-lg justify-between">
          <CameraIcon size={35} color="#021526" />
          <View className="flex-shrink ml-2">
            <Text className="text-xl font-outfit-bold text-primary">Cámara</Text>
            <Text className="text-xl font-outfit-medium text-gray-500">Permiso necesario para tomar fotos.</Text>
          </View>
          <Switch 
            trackColor={{ true: 'orange' }}
            value={cameraPermissionStatus === 'granted'} 
            onChange={requestCameraPermission}
            // onValueChange={() => setCameraPermissionStatus(cameraPermissionStatus === 'granted' ? 'denied' : 'granted')} 
            // thumbColor={cameraPermissionStatus === 'granted' ? '#021526' : '#fff'}
          />
        </View>
        <View className="flex-row justify-center mt-20">
          <TouchableOpacity className="border-2 border-primary p-4 rounded-full" onPress={handleContinue}>
            <MoveRight size={35} color="#021526" />
          </TouchableOpacity>
        </View>
      </View>
  )
}
