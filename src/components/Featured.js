import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const Featured = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between mt-4 items-center px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        <RestaurantCards
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.4}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is the dummy description!"}
          dishes={[]}
          lat={12.55}
          long={34.5}
        />
        <RestaurantCards
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.4}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is the dummy description!"}
          dishes={[]}
          lat={12.55}
          long={34.5}
        />
        <RestaurantCards
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.4}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is the dummy description!"}
          dishes={[]}
          lat={12.55}
          long={34.5}
        />
      </ScrollView>
    </View>
  );
};

export default Featured;
