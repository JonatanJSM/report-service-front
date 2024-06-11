import { Box, HStack } from '@gluestack-ui/themed';
import { View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <HStack space="4xl" reversed={false} >
          <Box w='$20' h='$20' bg='$blue300' />
          <Box w='$20' h='$20' bg='$blue400' />
          <Box w='$20' h='$20' bg='$blue500' />
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Home;
