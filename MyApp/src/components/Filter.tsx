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

export interface FilterIconProps {
  ImageComponent?: any;
  filterIconComponent?: React.ReactChild;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  filterIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onPress?: () => void;
  onFilterPress?: () => void;
}

export default class FilterIcon extends React.Component<FilterIconProps> {
  handleFilterPress = () => {};

  renderFilterIcon = () => {
    const {
      onFilterPress,
      filterIconComponent,
      filterIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <View style={styles.filterContainer}>
        {filterIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./../assets/filter_icon.png')}
            style={[styles.filterIconImageStyle, filterIconImageStyle]}
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
        onPress={this.handleFilterPress}>
        <Menu>
          <MenuTrigger>{this.renderFilterIcon()}</MenuTrigger>
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
  filterContainer: ViewStyle;
  filterIconImageStyle: ImageStyle;
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
  filterContainer: {
    margin: 12,
  },
  filterIconImageStyle: {
    width: 18,
    height: 18,
  },
  menuText: {
    fontFamily: 'varelaround-regular',
    color: '#424347',
  },
});
