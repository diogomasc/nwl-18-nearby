import { IconTicket } from "@tabler/icons-react-native";
import { styles } from "./styles";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "@/styles/colors";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>

        <View style={styles.footer}>
          <IconTicket size={24} color={colors.red.base} />
          <Text style={styles.tickets}>
            {data.coupons}{" "}
            {data.coupons === 1 ? "cupom disponível" : "cupons disponíveis"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
