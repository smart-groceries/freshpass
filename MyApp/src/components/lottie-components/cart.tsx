import * as React from 'react';

import {
  Animated,
  Easing,
  View,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class LottieCartAnimation extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
    }
    

    render() {
        return (
            <View>
                <LottieView
                        style={styles.storeLottie}
                        source={require('../../assets/lotties/cart.json')}
                        autoPlay
                        loop
                />
            </View>
        );
      }
}

const styles = StyleSheet.create({
    storeLottie: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200
    }
  });
  