import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

function MonthYearDropDown() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const current_month_year = months[date.getMonth()] + " " + date.getFullYear();
  const next_month_year =
    months[date.getMonth() + 1] + " " + date.getFullYear();

  const [selectedValue, setSelectedValue] = useState({ current_month_year });

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 100,
          width: 200,
          outlineStyle: "none",
          backgroundColor: "transparent",
          border: "none",
          fontSize: 24,
          fontWeight: "500",
          padding: 10,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label={current_month_year} value={current_month_year} />
        <Picker.Item label={next_month_year} value={next_month_year} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    alignItems: "flex-start",
    backgroundColor: "rgba(52, 52, 52, alpha)",
  },
});

export default MonthYearDropDown;
