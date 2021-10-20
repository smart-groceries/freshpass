import {typeAlias} from '@babel/types';
import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

export interface PaymentConfirmationProps {
  style?: ViewStyle | Array<ViewStyle> | undefined;
  ImageComponent?: any;
  openListIcon?: React.ReactChild;
  openListIconImageStyle?: ImageStyle | Array<ImageStyle>;
  orderNumber?: string;
  subtotal?: string;
  tax?: string;
  total?: string;
  onExitPress?: () => void;
  onOpenPress?: () => void;
}

export default class PaymentConfirmation extends React.Component<PaymentConfirmationProps> {
  renderOpenListIcon = () => {
    const {
      onOpenPress,
      openListIcon,
      openListIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <View style={styles.openListContainer}>
        <ImageComponent
          resizeMode="contain"
          source={require('../assets/add_icon.png')}
          style={
            (styles.openListIconImageStyle, openListIconImageStyle)
          }></ImageComponent>
      </View>
    );
  };

  render = () => {
    const {
      style,
      orderNumber = '0000',
      subtotal = '$0',
      tax = '$0',
      total = '$0',
    } = this.props;
    return (
      <View style={[_container(), style]}>
        <View style={styles.checkMarkContainer}>
          <Image source={require('../assets/checkmark.png')}></Image>
        </View>
        <Text style={styles.validatedText}>Order Validated!</Text>
        <Text style={styles.orderNumber}>Order Number: #{orderNumber}</Text>
        <View style={styles.orderedItemsContainer}>
          <Text style={styles.orderedItems}>Ordered Items</Text>
          {this.renderOpenListIcon()}
        </View>
        <View style={styles.totalContainer}>
          <View style={styles.subTotalContainer}>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.subtotal}>{subtotal}</Text>
          </View>
          <View style={styles.subTotalContainer}>
            <Text style={styles.subtotal}>Tax</Text>
            <Text style={styles.subtotal}>{tax}</Text>
          </View>
          <View style={styles.subTotalContainer}>
            <Text style={styles.orderedItems}>Total</Text>
            <Text style={styles.orderedItems}>{total}</Text>
          </View>
        </View>
        <RNBounceable style={styles.exitContainer}>
          <Text style={styles.exit}>Exit</Text>
        </RNBounceable>
      </View>
    );
  };
}

interface Style {
  openListContainer: ViewStyle;
  openListIconImageStyle: ImageStyle;
  validatedText: TextStyle;
  orderNumber: TextStyle;
  orderedItems: TextStyle;
  subtotal: TextStyle;
  exit: TextStyle;
  checkMarkContainer: ViewStyle;
  orderedItemsContainer: ViewStyle;
  totalContainer: ViewStyle;
  exitContainer: ViewStyle;
  subTotalContainer: ViewStyle;
}

const _container = (): ViewStyle => ({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  flex: 1,
});

const styles = StyleSheet.create<Style>({
  openListContainer: {marginRight: 20},
  openListIconImageStyle: {width: 18, height: 18},
  validatedText: {
    color: '#71BF61',
    fontSize: 25,
    fontFamily: 'varelaround-regular',
    marginTop: 30,
  },
  checkMarkContainer: {
    marginTop: 10,
  },
  orderNumber: {
    fontSize: 15,
    fontFamily: 'varelaround-regular',
    color: '#BBBBBB',
  },
  orderedItemsContainer: {
    width: '100%',
    height: 50,
    marginTop: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#BBBBBB',
    borderBottomColor: '#BBBBBB',
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  orderedItems: {
    fontSize: 20,
    fontFamily: 'varelaround-regular',
    marginHorizontal: 20,
    marginVertical: 3,
  },
  subtotal: {
    fontSize: 15,
    fontFamily: 'varelaround-regular',
    color: '#BBBBBB',
    marginHorizontal: 20,
    marginVertical: 3,
  },
  totalContainer: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  exitContainer: {
    width: '80%',
    height: '10%',
    borderRadius: 50,
    backgroundColor: '#71BF61',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.33,
  },
  exit: {
    fontFamily: 'varelaround-regular',
    fontSize: 20,
    color: '#71BF61',
  },
  subTotalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});
