import { colors } from "@/styles/theme";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={24} color={colors.red.base} />}
      <View style={styles.datails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
