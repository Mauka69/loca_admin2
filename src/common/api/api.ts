import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_URL,
	prepareHeaders: (headers) => {
		headers.set(
			'Authorization',
			'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMDYzMTc5LCJpYXQiOjE2Nzk5NzY3NzksImp0aSI6IjFkOWZhZWU1MjRhMjQ1NTBhOGQ3MjA5NjkxNTUwZTY4IiwidXNlcl9pZCI6MX0.OziX_erR_9pG0itu9y8JCCXArFHwGRjDrt8IWvrpO9Q',
		);
		return headers;
	},
});

const api = createApi({
	baseQuery,
	endpoints: () => ({}),
	reducerPath: 'api',
	tagTypes: ['Event', 'Tag', 'Business'],
});

export default api;
