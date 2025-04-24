import { View } from "react-native";
import { registerDevMenuItems } from "expo-dev-menu";

registerDevMenuItems([
  {
    name: "Test",
    callback: () => {
      // This log is not present when the item is pressed post-reload
      console.log("Test");
    },
  },
]);

export default function App() {
  return <View />;
}
