import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Pressable } from "react-native";
// Create an array to store the dates and day names
const weekDays = [];
function DateList({handleSelectedDate}) {
  const [dates, setDates] = useState([]);
  const [pressedItem, setPressedItem] = useState(null);
  // Get current date
  const currentDate = new Date();

  const createDateList = () => {
    // Add current date and day name to the array
    weekDays.push({
      date: currentDate.getDate(),
      day: currentDate.toLocaleDateString("en-US", { weekday: "short" }),
    });

    // Loop to get the next 7 days
    for (let i = 1; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);
      weekDays.push({
        date: nextDate.getDate(),
        day: nextDate.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }

    // Print the array
    console.log(weekDays);

    return weekDays;
  };
  useEffect(() => {
    setDates(createDateList());
  }, []);
  
  function getFullDate(dateString) {
    try {
      const dateObject = new Date(dateString);
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      return dateObject.toLocaleDateString(undefined, options);
    } catch (error) {
      return "Invalid date format or date string.";
    }
  }
  const getDateAndDay = (index) => {
    const selectedDate = weekDays[index].date;
    const selectedDay = weekDays[index].day;
    setPressedItem(index);
    const selected_date = `2023-07-${selectedDate}`;
    const fullDate = getFullDate(selected_date);
    console.log(fullDate);
    handleSelectedDate(fullDate,selectedDay);
  };
  const DateListItem = ({ day, date, index }) => {
    return (
      <Pressable
        onPress={() => getDateAndDay(index)}
        style={{
          backgroundColor: pressedItem === index ? "#D28EDC" : "#F9FBFD",
          margin: 10,
          padding: 20,
          borderRadius: 10,
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{ fontWeight: "500", color: "gray" }}>{day}</Text>
        <Text style={{ fontWeight: "500" }}>{date}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dates}
        renderItem={({ item, index }) => (
          <DateListItem day={item.day} date={item.date} index={index} />
        )}
      />
    </View>
  );
}

export default DateList;
