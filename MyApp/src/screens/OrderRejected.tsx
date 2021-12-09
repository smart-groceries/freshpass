import {typeAlias} from '@babel/types';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {useState, useEffect} from 'react';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {UPDATE_SHOPPING_SESSION} from '../graphql/mutations';
import {useQuery, useMutation} from '@apollo/client';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OrderRejected'>;
  route: RouteProp<RootStackParamList, 'OrderRejected'>;
};

const OrderRejected = ({navigation}: Props) => {
  const [shoppingSessionId, setShoppingSessionId] = useState("1");
  const [backButtonPressed, setBackButtonPressed] = useState(false);
  const [cancelButtonPressed, setCancelButtonPressed] = useState(false);
  const [setSessionStateFunction, setSessionStateFunctionResult] = useMutation(UPDATE_SHOPPING_SESSION, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if(backButtonPressed==true)  {
      navigation.navigate('CartView', {info: {shoppingSessionId}});
      try {
        setSessionStateFunction({
          variables: {
            new_value: "1",
            field_name: "state_id",
            shopping_session_id: shoppingSessionId,
          },
        });
      } catch {}
      while (setSessionStateFunctionResult.loading) {}
      if (setSessionStateFunctionResult.error) {
        console.log(setSessionStateFunctionResult.error);
      }
    }
    setBackButtonPressed(false);
  }, [backButtonPressed]);

  useEffect(() => {
    if(cancelButtonPressed==true)  {
      navigation.navigate('Home');
      try {
        setSessionStateFunction({
          variables: {
            new_value: "5",
            field_name: "state_id",
            shopping_session_id: shoppingSessionId,
          },
        });
      } catch {}
      while (setSessionStateFunctionResult.loading) {}
      if (setSessionStateFunctionResult.error) {
        console.log(setSessionStateFunctionResult.error);
      }
    }
    setCancelButtonPressed(false);
  }, [cancelButtonPressed]);

  return (
    <View style={[_container()]}>
      <View style={styles.rejectedContainer}>
        <Image source={require('../assets/rejected.png')}></Image>
      </View>
      <Text style={styles.rejectedText}>Order Rejected!</Text>
      <Text style={styles.orderNumber}>Order Number: #{shoppingSessionId}</Text>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Your order was rejected by the grocer. Please go back to your cart and
          correct the items that you listed that you have.
        </Text>
        <Text style={styles.paragraph}>
          If you would like to cancel your shopping session at this point,
          please return your items to their proper location and leave.
        </Text>
      </View>
      <RNBounceable
        style={[styles.buttonContainer, {marginTop: 60}]}
        onPress={() => setBackButtonPressed(true)}>
        <Text style={styles.buttonText}>Back to Cart</Text>
      </RNBounceable>
      <RNBounceable
        style={styles.buttonContainer}
        onPress={() => setCancelButtonPressed(true)}>
        <Text style={styles.buttonText}>Cancel Session</Text>
      </RNBounceable>
    </View>
  );
};

const _container = (): ViewStyle => ({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  flex: 1,
});

interface Style {
  rejectedContainer: ViewStyle;
  rejectedText: TextStyle;
  orderNumber: TextStyle;
  paragraph: TextStyle;
  paragraphContainer: ViewStyle;
  buttonContainer: ViewStyle;
  //buttonsContainer: ViewStyle;
  buttonText: TextStyle;
  //cancelContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  rejectedContainer: {
    marginTop: 10,
  },
  rejectedText: {
    color: '#E89023',
    fontSize: 25,
    fontFamily: 'VarelaRound-Regular',
    marginTop: 30,
    alignSelf: 'center',
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
  },
  paragraphContainer: {
    marginTop: 5,
    height: 175,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginHorizontal: 55,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: 'VarelaRound-Regular',
    color: '#BBBBBB',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 324,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#E89023',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  // buttonsContainer: {
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // cancelContainer: {
  //   width: '80%',
  //   height: '10%',
  //   borderRadius: 50,
  //   backgroundColor: '#E89023',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   opacity: 0.33,
  // },
});

export default OrderRejected;
