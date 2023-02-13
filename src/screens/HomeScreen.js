import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-8">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 rounded-full p-4 bg-gray-200 "
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={34} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center bg-gray-200 p-3 space-x-2">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder="Restaurants and Cuisines" />
        </View>
        <AdjustmentsVerticalIcon size={34} color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100">
        <Categories />
        <Featured
          title={"Featured"}
          description={"Paid placements from our partners"}
        />
        <Featured
          title={"Tasty Discounts"}
          description={"Everyone's been enjoying these juicy discounts"}
        />
        <Featured
          title={"Offers Near You"}
          description={"Why not support your local restaurants tonight"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
