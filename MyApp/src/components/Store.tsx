import RNBounceable from '@freakycoder/react-native-bounceable';
import * as React from 'react';

import {
  View,
  Image,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  ImageComponent,
} from 'react-native';

export interface StoreProps {
  ImageComponent?: any;
  storeIconComponent?: React.ReactChild;
  storeIconImageStyle?: ImageStyle | Array<ImageStyle>;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  onPress?: () => void;
}

export default class Store extends React.Component<StoreProps> {
  renderStoreIcon = () => {
    const {
      onPress,
      storeIconComponent,
      storeIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <View>
        {storeIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/store_icon.png')}
          />
        )}
      </View>
    );
  };

  render() {
    const {style} = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[_container(), style]}>
        {this.renderStoreIcon()}
      </RNBounceable>
    );
  }
}

interface Style {
  storeContainer: ViewStyle;
  storeIconImageStyle: ImageStyle;
}

const _container = (): ViewStyle => ({
  height: 168,
  width: '45%',
  //   borderRadius: 7,
  margin: 9,
  backgroundColor: '#F3F3F3',
});

// const styles = StyleSheet.create<Style>({
//     storeContainer: {}
// })
