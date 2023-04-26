import React from 'react'
import {
    Text,
    View,
    TextInput,
  } from "react-native";

function Input({containerStyle,textStyle,labelText,inputStyle,initialValue,handleChange, secure = false}) {
  return (
    <View style={containerStyle}>
            <Text style={textStyle}>{labelText}</Text>
            <TextInput
              secureTextEntry={secure}
              style={inputStyle}
              value={initialValue}
              onChangeText={handleChange}
            />
    </View>
  )
}

export default Input