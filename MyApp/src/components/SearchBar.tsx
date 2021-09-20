import * as React from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TextInputProps,
  TouchableWithoutFeedbackProps,
  TouchableHighlightBase,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import RNBounceable from '@freakycoder/react-native-bounceable';

export interface Source {
  source: string | {uri: string};
}

export interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  ImageComponent?: any;
  placeholderTextColor?: string;
  searchIconComponent?: React.ReactChild;
  clearIconComponent?: React.ReactChild;
  searchIconImageSource?: Source;
  //   clearIconImageSource?: ISource;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  textInputStyle?: TextStyle | Array<TextStyle>;
  searchIconImageStyle?: ImageStyle | Array<ImageStyle>;
  clearIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onBlur?: () => void;
  onFocus?: () => void;
  onPress?: () => void;
  onSearchPress?: () => void;
  onClearPress?: () => void;
}

export default class SearchBar extends React.Component<SearchBarProps> {
  inputRef: TextInput | null = null;

  handleSearchBarPress = () => {
    this.inputRef?.focus();
    this.props.onPress && this.props.onClearPress;
  };

  renderSearchIcon = () => {
    const {
      onSearchPress,
      searchIconComponent,
      searchIconImageStyle,
      ImageComponent = Image,
    } = this.props;
    return (
      <RNBounceable style={styles.searchContainer} onPress={onSearchPress}>
        {searchIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={require('./assets/search_icon.png')}
            style={[styles.searchIconImageStyle, searchIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const {
      onBlur,
      onFocus,
      textInputStyle,
      placeholder = 'Search',
      placeholderTextColor,
    } = this.props;
    let _placeholderTextColor = placeholderTextColor;
    if (!placeholderTextColor) {
      _placeholderTextColor = '#BBBBBB';
    }
    return (
      <TextInput
        placeholderTextColor={_placeholderTextColor}
        {...this.props}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref => (this.inputRef = ref)}
        style={[_textInputStyle(), textInputStyle]}
        placeholder={placeholder}
      />
    );
  };
  render() {
    const {style} = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[_container(), style]}
        onPress={this.handleSearchBarPress}>
        {this.renderSearchIcon()}
        {this.renderTextInput()}
      </RNBounceable>
    );
  }
}

interface Style {
  searchContainer: ViewStyle;
  searchIconImageStyle: ImageStyle;
}

const _container = (): ViewStyle => ({
  height: 43,
  width: '105%',
  // left: 16,
  // top: 135,
  borderRadius: 10,
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F3F3F3',
});

const _textInputStyle = (): TextStyle => ({
  width: '80%',
  marginLeft: 12,
  color: '#19191a',
});

const styles = StyleSheet.create<Style>({
  searchContainer: {
    marginLeft: 12,
  },
  searchIconImageStyle: {
    width: 18,
    height: 18,
  },
});
