import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL });

const api = createApi({
	baseQuery: async (args, baseApi, extraOptions) => {
		await mutex.waitForUnlock();

		let result = await baseQuery(args, baseApi, extraOptions);

		if (result.error!.status === 0) {
			if (!mutex.isLocked()) {
				const release = await mutex.acquire();

				try {
					const refreshResult = await baseQuery(
						{
							body: {
								refresh:
									// eslint-disable-next-line max-len
									'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NTg4OTU5LCJpYXQiOjE2Nzc1MDI1NTksImp0aSI6IjVkOWQwZDZhNjc3YjRhODdhZWJmNDA3MzU4YmFiMjVjIiwidXNlcl9pZCI6MX0.UNSTiAE80Ao04aSsvhJgnrM1K6LjBTUzA_fFHpzc7Do',
							},
							credentials: 'include',
							method: 'POST',
							url: 'accounts/token/refresh',
						},
						baseApi,
						extraOptions,
					);

					if (refreshResult.data) {
						result = await baseQuery(args, baseApi, extraOptions);
					} else {
						// baseApi.dispatch(logout());
						// window.location.href = '/login';
					}
				} finally {
					release();
				}
			} else {
				await mutex.waitForUnlock();
				result = await baseQuery(args, baseApi, extraOptions);
			}
		}

		return result;
	},
	endpoints: () => ({}),
	reducerPath: 'api',
	tagTypes: ['Event', 'Tag', 'BusinessCard'],
});

export default api;
