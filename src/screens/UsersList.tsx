// App.js
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, ActivityIndicator, View } from 'react-native';

import { useGetUsersQuery, User } from '../services/usersApi';


// const UsersList = () => {
//   // Fetch the users data using RTK Query
//   const { data, error, isLoading } = useGetUsersQuery();

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Error fetching users: {error.message}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={data} // Display data in FlatList
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={{ padding: 16 }}>
//           <Text style={{ fontSize: 18 }}>{item.name}</Text>
//           <Text>{item.email}</Text>
//         </View>
//       )}
//     />
//   );
// };


const UsersList = () => {
  const [page, setPage] = useState(1); // State to track current page number
  const [users, setUsers] = useState<User[]>([]); // State to store the list of users
  const { data, error, isLoading, isFetching } = useGetUsersQuery({ page, limit: 10 });

  // Optimizing the state update with useEffect
  useEffect(() => {
    if (data) {
      setUsers((prevUsers) => (page === 1 ? data : [...prevUsers, ...data]));
    }
  }, [data, page]); // This effect runs when either data or page changes

  // useCallback to prevent re-creating the function on every render
  const loadMoreUsers = useCallback(() => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1); // Increment page to load more data
    }
  }, [isFetching]);

  // Loading spinner when fetching data for the first page
  if (isLoading && page === 1) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Error handling if there is an issue fetching data
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error fetching users: {error.message}</Text>
      </View>
    );
  }

  // Render list of users
  return (
    <FlatList
      data={users} // Display data in FlatList
      keyExtractor={(item) => item.id.toString()} // Extract a unique key for each user
      renderItem={({ item }) => (
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
      onEndReached={loadMoreUsers} // Trigger to load more data when reaching the end
      onEndReachedThreshold={0.5} // Trigger to load more data when user scrolls 50% before the end
      ListFooterComponent={
        isFetching ? (
          <View style={{ padding: 16, alignItems: 'center' }}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        ) : null
      } // Show loading indicator when fetching more data
      getItemLayout={(data, index) => ({
        length: 72, // Set a fixed height for each row (this can help with performance)
        offset: 72 * index, // Ensure the FlatList calculates the position correctly
        index,
      })}
    />
  );
};



  
  

export default UsersList;
