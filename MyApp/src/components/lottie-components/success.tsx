import * as React from 'react';

import {
  Animated,
  Easing,
  View,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class LottieSuccessAnimation extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
    }
    

    render() {
        return (
            <View style={{backgroundColor: 'yellow', width: 100, height: 100, left: 100, bottom: -100}}>
                <LottieView
                        style={styles.storeLottie}
                        source={require('./../../assets/lotties/success.json')}
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
        width: 100,
        height: 100
    }
  });
  