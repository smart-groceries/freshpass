import * as React from 'react';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  ImageComponent,
  Text,
  TextStyle,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';

export interface NavBarProps {
  ImageComponent?: any;
  storesIconComponent?: React.ReactChild;
  listsIconComponent?: React.ReactChild;
  accountIconComponent?: React.ReactChild;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  storesIconImageStyle?: ImageStyle | Array<ImageStyle>;
  listsIconImageStyle?: ImageStyle | Array<ImageStyle>;
  accountIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onPress?: () => void;
  onStoresPress?: () => void;
  onListsPress?: () => void;
  onAccountPress?: () => void;
}

export default class NavBar extends React.Component<NavBarProps> {
  handleStoresPress = () => {
    this.props.onPress;
  };

  renderStoresIcon = () => {
    const {
      onStoresPress,
      storesIconComponent,
      storesIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <RNBounceable onPress={onStoresPress}>
        {storesIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/stores_icon.png')}
            style={[styles.storesIconImageStyle, storesIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  renderListsIcon = () => {
    const {
      onListsPress,
      listsIconComponent,
      listsIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <RNBounceable onPress={onListsPress}>
        {listsIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/lists_icon.png')}
            style={[styles.listsIconImageStyle, listsIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  renderAccountIcon = () => {
    const {
      onAccountPress,
      accountIconComponent,
      accountIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <RNBounceable onPress={onAccountPress}>
        {accountIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/account_icon.png')}
            style={[styles.accountIconImageStyle, accountIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  render() {
    const {style} = this.props;
    return (
      <View {...this.props} style={[_container(), style]}>
        {this.renderAccountIcon()}
        {this.renderStoresIcon()}
        {this.renderListsIcon()}
      </View>
    );
  }
}

interface Style {
  storesIconImageStyle: ImageStyle;
  listsIconImageStyle: ImageStyle;
  accountIconImageStyle: ImageStyle;
}

const _container = (): ViewStyle => ({
  height: 55,
  bottom: 0,
  alignItems: 'center',
  //display: 'flex',
  backgroundColor: '#F3F3F3',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
});

const styles = StyleSheet.create<Style>({
  storesIconImageStyle: {
    width: 30,
    height: 30,
  },
  listsIconImageStyle: {
    width: 30,
    height: 30,
  },
  accountIconImageStyle: {
    width: 30,
    height: 30,
  },
});
