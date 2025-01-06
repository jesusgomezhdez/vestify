import { useRef, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Redirect, useRouter } from "expo-router";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { SwitchCamera, CircleDot, Zap, ZapOff } from "lucide-react-native";

export default function CameraScreen() {
  const router = useRouter()
  const {hasPermission} = useCameraPermission()
  const redirectToPermissions = !hasPermission
  
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('back')
  
  const device = useCameraDevice(cameraPosition)
  const camera = useRef<Camera>(null)
  
  const [zoom, setZoom] = useState(device?.neutralZoom)
  const [flash, setFlash] = useState<'off' | 'on'>('off')
  const [torch, setTorch] = useState<'off' | 'on'>('off')

  const takePicture = async () => {
    try {
      if(camera.current === null) throw new Error('Camera is not initialized')

      const photo = await camera.current.takePhoto({
        flash: flash,
        enableShutterSound: false,
      })

      console.log(photo)
    } catch (error) {
      console.log(error)
    }
  }

  if(redirectToPermissions) return <Redirect href="/permissions" />

  if(!device) return <Text>No device</Text>

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 6, borderRadius: 15, overflow: 'hidden'}}>
        <Camera
          ref={camera}
          style={{flex: 1}}
          device={device}
          isActive
          photo
          zoom={zoom}
          resizeMode="cover"
          torch={torch}
        />
      </View>

      <View className="flex-1 p-2 flex-row justify-evenly items-center gap-4">
        <Pressable 
          className="rounded-full active:opacity-50 p-2"
          onPress={() => setFlash(flash === 'on' ? 'off' : 'on')}
        >
          {flash === 'on' ? <Zap size={35} color="white" /> : <ZapOff size={35} color="white" />}
        </Pressable>
        <Pressable 
          className="rounded-full active:opacity-50 p-2"
          onPress={takePicture}
        >
          <CircleDot size={60} color="white" strokeWidth={2.5} />
        </Pressable>
        <Pressable 
          className="rounded-full active:opacity-50 p-2"
          onPress={() => setCameraPosition(cameraPosition === 'back' ? 'front' : 'back')}
        >
          <SwitchCamera size={35} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}