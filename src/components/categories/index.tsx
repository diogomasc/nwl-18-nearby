import { FlatList } from "react-native";
import { Category } from "../caterogy";
import { styles } from "./styles";

export type CategoryProps = {
  id: string;
  name: string;
};

type Props = {
  data: CategoryProps[];
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          key={item.id}
          iconId={item.id}
          name={item.name}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      contentContainerStyle={styles.content}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}
