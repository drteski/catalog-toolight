import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
// import {
//   DocumentDirectoryPath,
//   writeFile,
//   readFile,
//   unlink,
// } from "react-native-fs";
import { data } from "../constants/products";
import { ProductsList } from "../components/ProductsList";

const Index = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("Kinkiety");
  const [products, setProducts] = useState(data.products);
  const [categories, setCategories] = useState(data.categories);

  useEffect(() => {
    const productsInCategories = data.products
      .filter((state) => {
        const title = state.title.toLowerCase();
        const searchQuery = search.toLowerCase();
        return title.includes(searchQuery);
      })
      .reduce((previousValue, currentValue) => {
        const existingCategory = previousValue.findIndex(
          (item) => item.name === currentValue.category,
        );
        if (existingCategory !== -1) {
          previousValue[existingCategory].count++;
          return previousValue;
        } else {
          return [...previousValue, { name: currentValue.category, count: 1 }];
        }
      }, []);
    if (search === "") {
      if (tab === "") {
        setCategories(data.categories);
        return setProducts(data.products);
      } else {
        setCategories(data.categories);
        return setProducts(
          data.products.filter((product) =>
            product.category.toLowerCase().includes(tab.toLowerCase()),
          ),
        );
      }
    } else {
      if (tab === "") {
        setCategories(
          categories.map((category) => {
            const ind = productsInCategories.findIndex(
              (dd) => dd.name === category.name,
            );
            if (ind !== -1) {
              return { ...category, count: productsInCategories[ind].count };
            } else {
              return { ...category, count: 0 };
            }
          }),
        );
        return setProducts(() => {
          return data.products.filter((state) => {
            const title = state.title.toLowerCase();
            const searchQuery = search.toLowerCase();
            return title.includes(searchQuery);
          });
        });
      } else {
        setCategories(
          categories.map((category) => {
            const ind = productsInCategories.findIndex(
              (dd) => dd.name === category.name,
            );
            if (ind !== -1) {
              return { ...category, count: productsInCategories[ind].count };
            } else {
              return { ...category, count: 0 };
            }
          }),
        );
        return setProducts(() => {
          return data.products
            .filter((product) =>
              product.category.toLowerCase().includes(tab.toLowerCase()),
            )
            .filter((product) => {
              const title = product.title.toLowerCase();
              const searchQuery = search.toLowerCase();
              return title.includes(searchQuery);
            });
        });
      }
    }
  }, [search, tab]);

  const handleTabs = (e) => (e === "Wszystkie" ? setTab("") : setTab(e));
  const handleSearch = (e) => (e === "" ? setSearch("") : setSearch(e.text));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={"transparent"} style="dark" />
      <Header
        search={handleSearch}
        searchValue={search}
        categoryChange={handleTabs}
        categoryTabs={categories}
        currentTab={tab}
      />
      {products.length === 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Nie znaleziono: {search}</Text>
        </View>
      ) : (
        <ProductsList
          products={products}
          productsCount={data.products.length}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default Index;
