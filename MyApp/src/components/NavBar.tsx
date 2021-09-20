import * as React from 'react';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  ImageComponent,
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
      <RNBounceable onPress={onStoresPress} bounceEffect={0.97}>
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
      <RNBounceable onPress={onListsPress} bounceEffect={0.97}>
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
      <RNBounceable onPress={onAccountPress} bounceEffect={0.97}>
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
  height: 75,
  bottom: 0,
  alignItems: 'center',
  //display: 'flex',
  backgroundColor: '#F3F3F3',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
});

const styles = StyleSheet.create<Style>({
  storesIconImageStyle: {
    flex: 1,
    width: 30,
    height: 30,
    position: 'absolute',
    translateX: -15,
    translateY: -15,
  },
  listsIconImageStyle: {
    flex: 1,
    width: 30,
    height: 30,
    position: 'absolute',
    translateX: -15,
    translateY: -15,
  },
  accountIconImageStyle: {
    flex: 1,
    width: 30,
    height: 30,
    position: 'absolute',
    translateX: -15,
    translateY: -15,
  },
});
