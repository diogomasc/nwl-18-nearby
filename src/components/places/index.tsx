import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useWindowDimensions, Text } from "react-native";
import { styles } from "./styles";
import { Place, PlaceProps } from "../place";
import { useRef } from "react";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item: PlaceProps) => item.id}
        renderItem={({ item }: { item: PlaceProps }) => <Place data={item} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <Text style={styles.title}>Explore locais perto de você</Text>
        }
      />
    </BottomSheet>
  );
}
