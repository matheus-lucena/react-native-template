import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type StoreProps = {
    message:string
}

type Props = StoreProps

const Message = (props: Props) => {
  const [showingMessage, SetShowingMessage] = useState<string|undefined>(undefined);
  const { message } = props;
  const time = 5000;
  useEffect(() => {
    if (message) {
      SetShowingMessage(message);
      setTimeout(() => {
        SetShowingMessage(undefined);
      }, time);
    }
  }, [message]);
  if (showingMessage) {
    return (
      <View>
        <Text>
          {showingMessage}
        </Text>
      </View>
    );
  }
  return <View />;
};

export default (Message);
