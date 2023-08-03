import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Call the onSearch callback with the search text
    // onSearch(searchText);
    console.log(searchText);
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: "gray",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
        }}
        placeholder="Search for doctor"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity onPress={handleSearch} style={{ marginLeft: -30 }}>
        <Icon name="search" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
