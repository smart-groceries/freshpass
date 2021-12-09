import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import {RootStackParamList} from '../navigation/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Bank'>;
  route: RouteProp<RootStackParamList, 'Bank'>;
};

const BankAccountScreen = ({route, navigation}: Props) => {
  const [grocer, setGrocer] = useState({
    id: route.params.grocer.account_id,
    email: route.params.grocer.email,
    balance: route.params.grocer.balance,
    address: route.params.grocer.address,
    grocer_name: route.params.grocer.grocer_name,
  });
  return <View></View>;
};

export default BankAccountScreen;
