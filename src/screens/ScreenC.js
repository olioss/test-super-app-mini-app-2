import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { UiButton } from "@test-superapp/ui-components";

function ScreenC({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp2 ScreenC</Text>
      <Text>Version 0.0.3</Text>
      <UiButton
        title="Go to ScreenD"
        onPress={() => navigation.navigate('ScreenD')}
      />
    </SafeAreaView>
  );
}

export default ScreenC
