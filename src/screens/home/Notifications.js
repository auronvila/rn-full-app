import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';
import jsonServer from '../../api/jsonServer';

const Notifications = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        getComments();
        setIsLoading(false);
      }, 1000)
    } catch (e) {
      console.log(e)
    }
  }, []);

  async function getComments() {
    const response = await jsonServer.get('/comments');
    const data = response.data;
    setComments(data);
  }


  function handleRefresh() {
    setRefreshing(true);
    getComments();
    setRefreshing(false);
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.primary} size={'large'}/>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          onRefresh={handleRefresh}
          refreshing={refreshing}
          ListHeaderComponent={<Text style={styles.headerStyle}>Welcome to notifications</Text>}
          ListEmptyComponent={<Text>No comments were found</Text>}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'center'} data={comments}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.emailText}>{item.email}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}/>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    width: 300,
    flex: 1,
    margin: 5,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  emailText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.primary,
  },
  bodyText: {
    fontSize: 13,
  },
  headerStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 14,
    marginTop: 14,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
