import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "Societies",
    "SocietiesCount",
    "RegisteredSociety",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),

    getDashboardStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getSocieties: build.query({
      query: () => "api/society",
      providesTags: ["Societies"],
    }),
    getSocietiesCount: build.query({
      query: () => "api/society/count",
      providesTags: ["SocietiesCount"],
    }),
    getSocietiesByState: build.query({
      query: (state) => `api/society/state`,
      providesTags: ["Societies"],
    }),
    getSocietiesByYear: build.query({
      query: (year) => `api/society/year`,
      providesTags: ["Societies"],
    }),
    getSocietiesByType: build.query({
      query: (type) => `api/society/type`,
      providesTags: ["Societies"],
    }),
    postRegisterSociety: build.mutation({
      query: (body) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: "api/registeredSociety/register",
        method: "POST",
        body,
      }),
    }),
    postLoginSociety: build.mutation({
      query: (body) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: "api/registeredSociety/login",
        method: "POST",
        body,
      }),
    }),
    getSocietyByEmail: build.query({
      query: (email) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/registeredSociety/${email}`,
        method: "GET",
      }),
    }),
    getAllSocieties: build.query({
      query: () => "api/registeredSociety",
      providesTags: ["RegisteredSociety"],
    }),
    updateSocietyById: build.mutation({
      query: ({ id, body }) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/registeredSociety/update/${id}`,
        method: "PUT",
        body
      }),
    }),
    // Logout
    logout: build.mutation({
      query: () => ({
        url: "api/registeredSociety/logout",
        method: "POST",

  }),
}),

postGrevience : build.mutation({
  query: ({ id, body }) => ({
    headers: {
      "Content-Type": "application/json",
    },
    url: `api/grevience/${id}`,
    method: "POST",
    body,
  }),
}),
getGrievences: build.query({
  query: () => "api/grevience",
  providesTags: ["Grevience"],
}),


})
});

export const {
  useGetSocietiesQuery,
  useGetUserQuery,

  useGetAdminsQuery,
  useGetDashboardStatsQuery,
  useGetSocietiesCountQuery,
  useGetSocietiesByStateQuery,
  useGetSocietiesByYearQuery,
  useGetSocietiesByTypeQuery,
  usePostRegisterSocietyMutation,
  usePostLoginSocietyMutation,
  useGetSocietyByEmailQuery,
  useGetAllSocietiesQuery,
  useUpdateSocietyByIdMutation,
  useLogoutMutation,
  usePostGrevienceMutation,
  useGetGrievencesQuery,
} = api;
