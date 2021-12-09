import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {GET_USER_PASSWORD_BY_USER_ID} from '../graphql/queries';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {UPDATE_GROCER} from '../graphql/mutations';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'EditStoreAccount'>;
  route: RouteProp<RootStackParamList, 'EditStoreAccount'>;
};

const EditStoreAccountScreen = ({route, navigation}: Props) => {
  const [grocer, setGrocer] = React.useState({
    id: route.params.grocer.account_id,
    email: route.params.grocer.email,
    balance: route.params.grocer.balance,
    address: route.params.grocer.address,
    grocer_name: route.params.grocer.grocer_name,
    password: '',
    nameValidated: true,
    addressValidated: true,
  });

  const [submitted, setSubmitted] = React.useState(false);

  console.log(grocer.id);

  const {error, loading, data, refetch} = useQuery(
    GET_USER_PASSWORD_BY_USER_ID,
    {
      variables: {id: grocer.id},
    },
  );

  const [
    updateGrocer,
    {
      data: updateGrocerData,
      loading: updateGrocerLoading,
      error: updateGrocerError,
    },
  ] = useMutation(UPDATE_GROCER, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (data) {
      setGrocer({...grocer, password: data.getUserPasswordById.password});
    }
  }, [data]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (grocer.nameValidated && submitted) {
      try {
        updateGrocer({
          variables: {
            grocer_id: grocer.id,
            field_name: 'grocer_name',
            new_value: grocer.grocer_name,
          },
        });
      } catch {}

      navigation.navigate('StoreAccount', {
        grocer: {
          email: grocer.email,
          account_id: grocer.id,
          grocer_name: grocer.grocer_name,
          address: grocer.address,
          balance: grocer.balance,
        },
      });

      setSubmitted(false);
    } else if (!grocer.nameValidated && submitted) {
      Alert.alert(
        'Please enter a valid store name',
        'Please make sure you are entering a valid store name or that the field is not blank.',
      );
    }
    setSubmitted(false);
  }, [grocer]);

  useEffect(() => {}, [submitted]);

  const obscurePassword = (password: string) => {
    const hidden = Array.from(password).map(char => {
      return '*';
    });

    return hidden;
  };

  const validateText = (text: string) => {
    if (text.trim().length == 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={loading ? styles.containerLoading : styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Name:</Text>
          <TextInput
            style={styles.userDataTextInput}
            onChangeText={val => {
              setGrocer({
                ...grocer,
                grocer_name: val,
                nameValidated: validateText(val),
              });
            }}>
            {grocer.grocer_name}
          </TextInput>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Address:</Text>
          {/* <TouchableOpacity style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity> */}
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {grocer.address}
            </Text>
          </View>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Email:</Text>
          {/* <TouchableOpacity style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity> */}
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {grocer.email}
            </Text>
          </View>
        </View>
        <View style={styles.largeItemContainer}>
          <Text style={styles.itemText}>Password</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('ChangePassword', {
                user: {id: grocer.id, password: grocer.password},
              })
            }>
            <Text>Edit</Text>
          </TouchableOpacity>
          <View style={styles.userDataView}>
            <Text style={[styles.userDataText, {opacity: 0.5}]}>
              {obscurePassword(grocer.password)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            setGrocer({
              ...grocer,
              nameValidated: validateText(grocer.grocer_name),
            });
            setSubmitted(true);
          }}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
      {loading || submitted ? (
        <ActivityIndicator
          size="large"
          color="#71BF61"
          style={styles.loading}></ActivityIndicator>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.6,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    // justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '45%',
    height: 85,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  largeItemContainer: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '95%',
    height: 85,
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 15,
    flexWrap: 'wrap',
  },
  userDataView: {
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 10,
  },
  itemText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    fontSize: 20,
  },
  userDataText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
  },
  userDataTextInput: {
    alignSelf: 'flex-start',
    fontFamily: 'VarelaRound-Regular',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    // borderColor: '#999999',
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize: 20,
  },
  editButton: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#E89023',
    height: 25,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 18,
  },
  saveButton: {
    marginVertical: '25%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 324,
    backgroundColor: '#71BF61',
    borderRadius: 12,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scale: 2.5}],
  },
});

export default EditStoreAccountScreen;
