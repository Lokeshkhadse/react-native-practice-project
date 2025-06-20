import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const topOffset = screenHeight * 0.04; // 20% from top

export default StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 20,

    // 👇 Shift navbar down by 20% of screen height
    marginTop: topOffset,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f97316",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  icon: {
    marginLeft: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  dropdown: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  dropdownHeader: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },
  dropdownText: {
    fontSize: 14,
    color: "#374151",
    marginLeft: 8,
  },
});
