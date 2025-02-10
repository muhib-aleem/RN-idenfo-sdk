/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// android
const { IdvModule } = NativeModules

// ios
// const { IDVBridge } = NativeModules;

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //android
  const openNativeActivity = async () => {
    try {
      const result = await NativeModules.IdvModule.openNativeActivity();
      console.log(result); // Log success message
    } catch (error) {
      console.error(error); // Log any errors
    }
  };
  useEffect(() => {
    openNativeActivity()
  }, [])



  // ios
  const handlePress = async () => {
    // try {
    //   const authData = {
    //     apiKey: "80d3b649-e43f-4067-a1e7-ac978dfdb21b",
    //     apiSecret: "8cafa201c083fb3b5c36dea4f9e29899d36b652e",
    //     userId: "test-user-id",
    //   };
    //   const result = await IDVBridge.initializeFramework(authData);
    //   console.log(result); // Framework launched successfully
    // } catch (error) {
    //   console.error("Error launching framework:", error);
    // }
  };



  return (
    <View style={{
      flex: 1, backgroundColor: "white", justifyContent: 'center',
      alignItems: 'center',
    }}>

      {/* <Button title="Launch Framework" onPress={handlePress} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
