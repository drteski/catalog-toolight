import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoriesRow } from "./CategoryTab";
import { IcBaselineRefresh } from "./Icones";
import { useRef } from "react";

const { width } = Dimensions.get("screen");

export const Header = ({
  search,
  categoryTabs,
  categoryChange,
  currentTab,
}) => {
  const searchRef = useRef(null);
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <Image
          source={require("../assets/images/large_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        {width >= 800 && (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TextInput
              ref={searchRef}
              onTextInput={({ nativeEvent }) => search(nativeEvent)}
              style={styles.search}
              placeholder={"Szukaj"}
            />
            {currentTab !== "" && (
              <View style={styles.searchCategory}>
                <Text style={styles.searchCategoryText}>w {currentTab}</Text>
              </View>
            )}
          </View>
        )}
        <TouchableOpacity style={styles.refreshButton}>
          <IcBaselineRefresh style={styles.refreshIcon} />
        </TouchableOpacity>
      </View>
      {width < 800 && (
        <View style={{ flexDirection: "row" }}>
          <TextInput
            ref={searchRef}
            onTextInput={({ nativeEvent }) => search(nativeEvent)}
            style={styles.search}
            placeholder={"Szukaj"}
          />
          {currentTab !== "" && (
            <View style={styles.searchCategory}>
              <Text style={styles.searchCategoryText}>w {currentTab}</Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.bottomHeader}>
        <CategoriesRow
          data={categoryTabs}
          categoryChange={categoryChange}
          searchClear={{ searchState: search, input: searchRef }}
          activeTab={currentTab}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
    gap: 16,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "#b0b0b0",
  },
  topHeader: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomHeader: {
    flexDirection: "row",
    gap: 8,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 52,
  },
  refreshButton: {
    padding: 8,
  },
  refreshIcon: {
    height: 32,
    width: 32,
    color: "#2d2d2d",
  },
  search: {
    backgroundColor: "#f1f1f1",
    borderStyle: "solid",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    height: 52,
    flex: 1,
    fontFamily: "Manrope-Regular",
  },
  searchCategory: {
    position: "absolute",
    right: 4,
    top: 4,
    borderRadius: 6,
    backgroundColor: "#2d2d2d",

    paddingVertical: 13,
    paddingHorizontal: 18,
  },
  searchCategoryText: {
    fontWeight: "500",
    fontSize: 12,
    color: "#ffffff",
    verticalAlign: "middle",
    fontFamily: "Manrope-Medium",
  },
});
