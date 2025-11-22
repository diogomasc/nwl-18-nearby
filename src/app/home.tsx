import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { api } from "../services/api";
import { Categories, CategoryProps } from "../components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [category, setCategory] = useState("");

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error("Error fetching categories:", error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
    </View>
  );
}
