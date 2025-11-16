import { View } from "react-native";

import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <Text style={{ fontSize: 24 }}>Hello, World!</Text> */}

      <Welcome />
      <Steps />
    </View>
  );
}
