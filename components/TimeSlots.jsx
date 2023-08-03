import React, {useState} from "react";
import { View, Text, FlatList, Pressable } from "react-native";

function TimeSlots({handleSelectedTime}) {
    const[isSelected,setIsSelected]=useState(false);
    const[shift,setShift]=useState('');
    const [mornPressedItem, setMornPressedItem] = useState(null);
    const [evenPressedItem, setEvenPressedItem] = useState(null);
  const timeSlots = [
    {
      shift: "Morning",
      slots: [
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "1:00",
      ],
    },
    {
      shift: "Evening",
      slots: [
        "6:00",
        "6:15",
        "6:30",
        "6:45",
        "7:00",
        "7:15",
        "7:30",
        "7:45",
        "8:00",
      ],
    },
  ];

  const getTimeSlot = (index,shiftSlot) => {
    console.log(index);
    let selectedMornTime='';
    let selectedEvenTime='';
    setShift(shiftSlot);
    if(shift==="Morning"){
         selectedMornTime = timeSlots[0].slots[index];
         setMornPressedItem(index);
         setIsSelected(true);
         handleSelectedTime(`${selectedMornTime} `);
         
    }else if(shift==="Evening"){
         selectedEvenTime = timeSlots[1].slots[index];
         setEvenPressedItem(index);
         setIsSelected(false);
         handleSelectedTime(`${selectedEvenTime} pm`);
    }
    
    console.log(selectedMornTime ,selectedEvenTime);
  }

  return (
    <>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "500", marginVertical: 10 }}>
          {timeSlots[0].shift}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, flexWrap: "wrap" }}
          horizontal
          data={timeSlots[0].slots}
          renderItem={({ item,index }) => (
            <Pressable
              onPress={()=>getTimeSlot(index,'Morning')}
              style={{
                backgroundColor: mornPressedItem === index ? "#D28EDC" : "#F9FBFD",
                margin: 10,
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 20,
                shadowOffset: { width: -2, height: 4 },
                shadowColor: "#171717",
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          )}
        />
      </View>

      <View>
        <Text style={{ fontSize: 24, fontWeight: "500", marginVertical: 10 }}>
          {timeSlots[1].shift}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, flexWrap: "wrap" }}
          horizontal
          data={timeSlots[1].slots}
          renderItem={({ item , index}) => (
            <Pressable
            onPress={()=>getTimeSlot(index,'Evening')}
              style={{
                backgroundColor: evenPressedItem === index ? "#D28EDC" : "#F9FBFD",
                margin: 10,
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 20,
                shadowOffset: { width: -2, height: 4 },
                shadowColor: "#171717",
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
             
            >
              <Text>{item}</Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}

export default TimeSlots;
