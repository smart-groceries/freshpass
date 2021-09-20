import * as React from 'react';

import {View, Image, ViewStyle, ImageStyle, StyleSheet} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';

export interface FilterProps {
  ImageComponent?: any;
  filterIconComponent?: React.ReactChild;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  filterIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onPress?: () => void;
  onFilterPress?: () => void;
}

export default class Filter extends React.Component<FilterProps> {
  handleFilterPress = () => {
    this.props.onPress;
  };

  renderFilterIcon = () => {
    const {
      onFilterPress,
      filterIconComponent,
      filterIconImageStyle,
      ImageComponent,
    } = this.props;
    return (
      <RNBounceable style={styles.filterContainer} onPress={onFilterPress}>
        {filterIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/filter_icon.png')}
            style={[styles.filterIconImageStyle, filterIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };
  render() {
    const {style} = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[_container(), style]}
        onPress={this.handleFilterPress}>
        {this.renderFilterIcon()}
      </RNBounceable>
    );
  }
}

interface Style {
  filterContainer: ViewStyle;
  filterIconImageStyle: ImageStyle;
}

const _container = (): ViewStyle => ({
  height: 43,
  width: 43,
  borderRadius: 10,
  backgroundColor: '#F3F3F3',
  flexDirection: 'row',
});

const styles = StyleSheet.create<Style>({
  filterContainer: {
    marginLeft: 12,
  },
  filterIconImageStyle: {
    width: 18,
    height: 18,
  },
});
