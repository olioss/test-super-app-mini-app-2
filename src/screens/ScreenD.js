import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { UiButton } from "@test-superapp/ui-components";

function ScreenD({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp 2 ScreenD</Text>
      <UiButton
        title="Go to MiniApp1"
        onPress={() => navigation.navigate('MiniApp1')}
      />
    </SafeAreaView>
  );
}

export default ScreenD
