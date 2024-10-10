import { FlashList } from "@shopify/flash-list";
import { ProductTile } from "./ProductTile";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { useOrientation } from "../hooks/useOrientation";
const { width } = Dimensions.get("screen");
export const ProductsList = ({ products, productsCount }) => {
  const orientation = useOrientation();

  let columns = 0;
  console.log(orientation);
  if (orientation === 4 || orientation === 3) {
    if (width >= 1000) {
      columns = 6;
    } else {
      columns = 5;
    }
  } else {
    if (width >= 800) {
      columns = 3;
    } else {
      columns = 2;
    }
  }
  return (
    <View style={styles.productListing}>
      <View>
        <Text>{productsCount}</Text>
      </View>
      <FlashList
        data={products}
        renderItem={(product) => <ProductTile data={product} />}
        estimatedItemSize={productsCount}
        numColumns={columns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productListing: {
    paddingLeft: 32,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
