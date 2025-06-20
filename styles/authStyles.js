import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f97316", // orange-600
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280", // gray-500
    marginBottom: 20,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6", // gray-100
    borderRadius: 6,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
    shadowColor: "#00000020",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  form: {
    width: "100%",
  },
  input: {
    height: 48,
    borderColor: "#d1d5db", // gray-300
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#ffffff",
  },
  button: {
    height: 48,
    backgroundColor: "#f97316", // orange-600
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchText: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 10,
  },
  linkText: {
    color: "#f97316",
    fontWeight: "600",
  },
});
