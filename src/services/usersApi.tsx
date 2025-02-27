// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define the user type
// export interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// // Create the API slice
// export const usersApi = createApi({
//   reducerPath: 'usersApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<User[], void>({
//       query: () => 'users',
//     }),
//   }),
// });

// // Export the auto-generated hook
// export const { useGetUsersQuery } = usersApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the user type
export interface User {
  id: number;
  name: string;
  email: string;
}

// Define the response type for paginated data
interface PaginatedUsers {
  data: User[];
  total: number; // Total number of users (to help in pagination)
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<PaginatedUsers, { page: number; limit: number }>({
      query: ({ page, limit }) => `users?_page=${page}&_limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
