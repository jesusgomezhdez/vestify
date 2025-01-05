import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Shirt, ShoppingBag } from 'lucide-react-native';
import { Image } from 'expo-image';

const outfits = [
  {
    id: 1,
    image: require('../assets/images/outfit/outfit1.jpeg'),
  },
  {
    id: 2,
    image: require('../assets/images/outfit/outfit2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/outfit/outfit3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/outfit/outfit4.jpg'),
  },
  {
    id: 5,
    image: require('../assets/images/outfit/outfit1.jpeg'),
  },
]

export default function App() {
  return (
    <SafeAreaView className=" bg-white m-2">
      <View>
        <View className="flex-row justify-between gap-2">
            <Pressable className="bg-primary p-4 rounded-lg flex-1 items-center flex-row gap-1">
              <Shirt color="white" size={22}/>
              <Text className="font-outfit-medium text-white text-center text-xl">Nuevo Outfit</Text>
            </Pressable>
            <Pressable className="bg-primary p-4 rounded-lg flex-1 items-center flex-row gap-1">
              <ShoppingBag color="white" size={22}/>
              <Text className="font-outfit-medium text-white text-center text-xl">Nueva compra</Text>
            </Pressable>
        </View>
        <View className="mt-4">
          <Text className="font-outfit-bold text-black text-2xl">Tus últimos outfits</Text>
          <View className="flex-row mt-1 flex-wrap">
            {
              outfits.map((outfit) => (
                <View className="w-1/2 p-1" key={outfit.id}>
                    <Image 
                      source={outfit.image} 
                      contentFit="cover"
                      contentPosition="center"
                      style={{ width: '100%', height: 290, borderRadius: 10 }}
                    />
                </View>
              ))
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
