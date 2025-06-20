import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sidebarContainer: {
    backgroundColor: "#0e1e49",
    padding: 10,
    width: '40%', // 👈 Sidebar takes only 30% of screen width
    height: '100%', // Optional: ensure full height
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#F97316",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#1f2a49",
    borderRadius: 6,
    marginBottom: 6,
  },
  iconLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLabel: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
  },
  submenuContainer: {
    paddingLeft: 30,
    marginTop: 4,
    marginBottom: 8,
  },
  submenuItem: {
    paddingVertical: 6,
  },
  submenuLabel: {
    color: "#d1d5db",
    fontSize: 13,
  },
});

export default styles;
