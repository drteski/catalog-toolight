import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

import { IcBaselineClear } from "./Icones";

export const CategoriesRow = ({
  data,
  categoryChange,
  searchClear,
  activeTab,
}) => {
  const { searchState, input } = searchClear;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          categoryChange("");
          searchState("");
          input.current.clear();
        }}
        style={styles.allTab}
      >
        <>
          <Text style={styles.nameDanger}>
            <IcBaselineClear style={styles.clearIcon} />
          </Text>
        </>
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tabsContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {data.map((category) => (
          <TouchableOpacity
            onPress={() => categoryChange(category.name)}
            style={category.name === activeTab ? styles.tabActive : styles.tab}
            key={category.name}
          >
            <>
              <Text style={styles.name}>{category.name}</Text>
              <Text style={styles.count}>{category.count}</Text>
            </>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "#eaeaea",
    fontSize: 14,
    borderRadius: 8,
    flexDirection: "row",
    gap: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 8,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    borderColor: "#e6cd1a",
    backgroundColor: "#ffe41d",
    fontSize: 14,
    borderRadius: 8,
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderStyle: "solid",
    borderWidth: 1,
  },
  allTab: {
    padding: 2,
    marginRight: 16,
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 14,
    borderRadius: 8,
    flexDirection: "row",
    gap: 16,
    backgroundColor: "#b91515",
    borderColor: "#7c1b1b",
  },
  clearIcon: { flex: 1, color: "#ffffff", width: 34, height: 34 },
  nameDanger: {
    fontWeight: "300",
    textTransform: "capitalize",
    textAlignVertical: "center",
    color: "#ffffff",
    fontFamily: "Manrope-Regular",
    verticalAlign: "middle",
  },
  name: {
    fontWeight: "300",
    textTransform: "capitalize",
    textAlignVertical: "center",
    color: "#2d2d2d",
    fontFamily: "Manrope-Regular",
    verticalAlign: "middle",
  },
  count: {
    fontWeight: "700",
    textAlignVertical: "center",
    fontFamily: "Manrope-ExtraBold",
    color: "#2d2d2d",
    verticalAlign: "middle",
  },
});
