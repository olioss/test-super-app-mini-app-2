import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

function ScreenC({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp2 ScreenC</Text>
      <Button
        title="Go to ScreenD"
        onPress={() => navigation.navigate('ScreenD')}
      />
    </SafeAreaView>
  );
}

export default ScreenC
