import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SizeNormalize } from '~/assets/SizeNormalize';

type StoreProps = {
    message:string
}

type Props = StoreProps

const Message = (props: Props) => {
  const [showingMessage, SetShowingMessage] = useState<string|undefined>(undefined);
  const { message } = props;
  const time = 2000;

  useEffect(() => {
    if (message) {
      SetShowingMessage(message);
      setTimeout(() => {
        SetShowingMessage(undefined);
      }, time);
    }
  }, [message]);
  if(showingMessage)
    return (
      <View style={styles.container}>
          <Text>
            {showingMessage}
          </Text>
      </View>
  );
  return <View/>
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth:1,
    flexDirection:'row',
    height:SizeNormalize(60),
    alignItems:'center',
    justifyContent:'center'
  }
});

export default (Message);
