import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

function ScreenD({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp 2 ScreenD</Text>
      <Button
        title="Go to MiniApp1"
        onPress={() => navigation.navigate('MiniApp1')}
      />
    </SafeAreaView>
  );
}

export default ScreenD
