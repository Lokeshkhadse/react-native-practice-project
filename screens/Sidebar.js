import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "../styles/sidebarStyles"; // Make sure this path matches your project
import { useNavigation } from "@react-navigation/native";


const SideBar = () => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const navigation = useNavigation();

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: "tachometer-alt",
      screen: "Dashboard",
    },
    {
      label: "Leads",
      icon: "user-friends",
      submenu: [
        { label: "All Leads", screen: "AllLeads" },
        { label: "New Lead", screen: "NewLead" },
      ],
    },
    {
      label: "Projects",
      icon: "project-diagram",
      submenu: [
        { label: "All Projects", screen: "AllProjects" },
        { label: "Analytics", screen: "Analytics" },
      ],
    },
    {
      label: "Properties",
      icon: "home",
      screen: "Properties",
    },
    {
      label: "Reports",
      icon: "chart-bar",
      submenu: [
        { label: "My Reports", screen: "MyReports" },
        { label: "Team Reports", screen: "TeamReports" },
        { label: "Company Reports", screen: "CompanyReports" },
      ],
    },
    {
      label: "Tasks",
      icon: "tasks",
      submenu: [
        { label: "My Tasks", screen: "MyTasks" },
        { label: "Team Tasks", screen: "TeamTasks" },
      ],
    },
    {
      label: "Attendance",
      icon: "user-check",
      submenu: [
        { label: "My Attendance", screen: "MyAttendance" },
        { label: "Team Attendance", screen: "TeamAttendance" },
        { label: "My Timeline", screen: "MyTimeline" },
      ],
    },
    {
      label: "Manage Roles",
      icon: "user-circle",
      screen: "AssignRole",
    },
  ];

  return (
    <ScrollView style={styles.sidebarContainer}>
      <View style={styles.headerContainer}>
        <Icon name="gem" size={20} color="#F97316" />
        <Text style={styles.headerText}>Menu</Text>
      </View>

      {menuItems.map((item) => (
        <View key={item.label}>
          {item.submenu ? (
            <View>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => toggleSubmenu(item.label)}
              >
                <View style={styles.iconLabelContainer}>
                  <Icon name={item.icon} size={16} color="white" />
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </View>
                <Icon
                  name={openSubmenus[item.label] ? "chevron-down" : "chevron-right"}
                  size={12}
                  color="white"
                />
              </TouchableOpacity>
              {openSubmenus[item.label] && (
                <View style={styles.submenuContainer}>
                  {item.submenu.map((sub) => (
                    <TouchableOpacity
                      key={sub.label}
                      style={styles.submenuItem}
                      onPress={() => navigation.navigate(sub.screen)}
                    >
                      <Text style={styles.submenuLabel}>{sub.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ) : (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.iconLabelContainer}>
                <Icon name={item.icon} size={16} color="white" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default SideBar;
