import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PureNativeModule from './PureNativeModule';
import StorageView from './StorageView';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <StorageView />
          <PureNativeModule />
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}
