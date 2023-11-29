import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import ICON from "./assets/ICON.png";
import Aboutus from "./screens/Aboutus";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "white",
                  borderBottomWidth: 2,
                }}
              >
                <Image
                  source={ICON}
                  style={{
                    height: 90,
                    width: 112,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 20,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  E-TRAYSI
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#5FC0DE",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#5FC0DE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="About us"
          options={{
            drawerLabel: "About us",
            title: "E-TRAYSI",
          }}
          component={Aboutus}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
