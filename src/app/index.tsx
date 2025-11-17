import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { View } from "react-native";

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
      <Button>
        <Button.Title>Adicionar</Button.Title>
      </Button>
    </View>
  );
}
