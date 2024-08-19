import { createApi } from "@reduxjs/toolkit/query/react";
import Axios from "axios";

// Define the Axios base query function
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, body, params }) => {
    try {
      const result = await Axios({
        url: baseUrl + url,
        method,
        data: body || data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

// Create the API service using createApi
export const apiService = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: () => ({}),
  reducerPath: "apiService",
});

export const clientsApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "projects",
        method: "GET",
      }),
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `projects/${id}`,
        method: "GET",
      }),
    }),
    getImpactFunds: builder.query({
      query: () => ({
        url: "impact-funds",
        method: "GET",
      }),
    }),
    getImpactFundById: builder.query({
      query: (id) => ({
        url: `impact-funds/${id}`,
        method: "GET",
      }),
    }),
    getStastics: builder.query({
      query: () => ({
        url: `impact-funds/statistics`,
        method: "GET",
      }),
    }),
    getExperiences: builder.query({
      query: () => ({
        url: "experiences",
        method: "GET",
      }),
    }),
    getExperienceById: builder.query({
      query: (id) => ({
        url: `experiences/${id}`,
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    bookExperience: builder.mutation({
      query: ({data}) => ({
        url: "user-bookings",
        method: "POST",
        body: data,
      }),
    }),
    contributeProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `impact-funds/${id}/donate`,
        method: "POST",
        body: data,
      }),
    })
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components
export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetImpactFundsQuery,
  useGetImpactFundByIdQuery,
  useGetExperiencesQuery,
  useGetExperienceByIdQuery,
  useGetStasticsQuery,
  useLoginUserMutation,
  useBookExperienceMutation,
  useContributeProjectMutation

} = clientsApi;

// Export the extended API service
export default clientsApi;
