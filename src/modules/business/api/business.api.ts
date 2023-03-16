import api from '../../../common/api/api';
import { Business } from '../../../common/interfaces';

const businessApi = api.injectEndpoints({
	endpoints: (build) => ({
		createCity: build.mutation({
			invalidatesTags: ['Business'],
			query: (body: Pick<Business, 'name'>) => ({
				body,
				method: 'POST',
				url: 'business_cards/city/',
			}),
		}),
		businessCardAllCity: build.query<Business[], void>({
			providesTags: ['Business'],
			query: () => '/business_cards/city/all/',
		}),

		businessGet: build.query<Business[], 'page' | 'city_id' | void>({
			providesTags: ['Business'],
			query: () => 'business_cards/popular/map/',
		}),
		searchBusiness: build.query<Business[], 'name' | void>({
			providesTags: ['Business'],
			query: () => '/search/businessCard/',
		}),
		createBusiness: build.mutation({
			invalidatesTags: ['Business'],
			query: (
				body: Pick<
					Business,
					| 'name'
					| 'street'
					| 'house'
					| 'website_url'
					| 'latitude'
					| 'longitude'
					| 'city'
					| 'phones'
					| 'type'
					| 'sub_tags'
					| 'day_of_week'
					| 'start_time'
					| 'end_time'
					| 'work_schedule'
				>,
			) => ({
				body,
				method: 'POST',
				url: '/business_cards/business_card/',
			}),
		}),
		getBusiness: build.query<Business[], 'business_id' | void>({
			providesTags: ['Business'],
			query: () => `business_cards/business_card/?business_id`,
		}),
		getItem: build.query<Business[], 'business_id'>({
			providesTags: ['Business'],
			query: () => '/business_cards/business_card/item/',
		}),
		getCity: build.query<Business[], 'city_id' | void>({
			providesTags: ['Business'],
			query: () => 'business_cards/city/',
		}),

		getBusinessCards: build.query<Business[], void>({
			providesTags: ['Business'],
			query: () => 'business_cards/all/',
		}),
	}),
});
export const {
	useCreateCityMutation,
	useBusinessCardAllCityQuery,
	useCreateBusinessMutation,
	useGetBusinessQuery,
	useGetItemQuery,
	useGetCityQuery,
	useGetBusinessCardsQuery,
	useBusinessGetQuery,
} = businessApi;
