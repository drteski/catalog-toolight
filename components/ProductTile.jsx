import { Link } from "expo-router";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

export function ProductTile({ data }) {
  const { category, ean, id, isNew, img, sku, title, url } = data.item;
  return (
    <View style={styles.productTileContainer}>
      <>
        {isNew && (
          <View
            style={{
              position: "absolute",
              zIndex: 10,
              backgroundColor: "#e6cd1a",
              paddingVertical: 4,
              paddingHorizontal: 8,
              top: 6,
              left: 6,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontSize: 10 }}>Nowa</Text>
          </View>
        )}
      </>
      <Image
        style={styles.productImage}
        resizeMode="contain"
        source={{ uri: img }}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productCategory}>{category}</Text>
        <Text style={{ fontSize: 10 }}>
          <Text style={{ fontWeight: 700 }}>EAN: </Text>
          {ean}
        </Text>
        <Text style={{ fontSize: 10 }}>
          <Text style={{ fontWeight: 700 }}>SKU: </Text>
          {sku}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productTileContainer: {
    borderWidth: 1,
    borderColor: "#b0b0b0",
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
    marginBottom: 0,
    flex: 1,
    marginRight: 16,
  },
  productImage: {
    width: 150,
    aspectRatio: "1/1",
    margin: 16,
  },
  productDetails: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    fontFamily: "Manrope-Regular",
    borderTopWidth: 1,
    flex: 1,
    width: "100%",
    borderColor: "#b0b0b0",
  },
  productTitle: {
    fontWeight: "500",
    fontFamily: "Manrope-Bold",
    fontSize: 13,
    height: 42,
    paddingBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    paddingBottom: 4,
    fontWeight: "500",
    color: "#e6cd1a",
  },
});
