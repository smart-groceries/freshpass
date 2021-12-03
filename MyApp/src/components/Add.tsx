import * as React from 'react';

import {
  View,
  Image,
  Text,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  Alert,
  TextStyle,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {
  Menu,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
  MenuOption,
} from 'react-native-popup-menu';

export interface AddIconProps {
  ImageComponent?: any;
  addIconComponent?: React.ReactChild;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  addIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onPress?: () => void;
  onAddPress?: () => void;
}

export default class AddIcon extends React.Component<AddIconProps> {
  handleAddPress = () => {};

  renderAddIcon = () => {
    const {
      onAddPress,
      addIconComponent,
      addIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <View style={styles.addContainer}>
        {addIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./../assets/add_icon.png')}
            style={[styles.addIconImageStyle, addIconImageStyle]}
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
        // bounceEffect={0.97}
        style={[_container(), style]}
        onPress={this.handleAddPress}>
        <Menu>
          <MenuTrigger>{this.renderAddIcon()}</MenuTrigger>
          <MenuOptions>
            <MenuOption>
              <Text style={styles.menuText}>Closest</Text>
            </MenuOption>
            <MenuOption>
              <Text style={styles.menuText}>Farthest</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </RNBounceable>
    );
  }
}

interface Style {
  addContainer: ViewStyle;
  addIconImageStyle: ImageStyle;
  menuText: TextStyle;
}

const _container = (): ViewStyle => ({
  //flex: 1,
  height: 43,
  width: 43,
  borderRadius: 10,
  marginBottom: 5,
  marginLeft: 5,
  backgroundColor: '#F3F3F3',
  alignItems: 'center',
  alignSelf: 'center',
});

const styles = StyleSheet.create<Style>({
  addContainer: {
    margin: 12,
  },
  addIconImageStyle: {
    width: 18,
    height: 18,
  },
  menuText: {
    fontFamily: 'varelaround-regular',
    color: '#424347',
  },
});
