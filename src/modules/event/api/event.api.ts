import api from '../../../common/api/api';
import { Event } from '../../../common/interfaces';

const eventApi = api.injectEndpoints({
	endpoints: (build) => ({
		createEvent: build.mutation({
			invalidatesTags: ['Event'],
			query: (
				body: Pick<
					Event,
					'business' | 'end' | 'start' | 'description' | 'name' | 'tags' | 'time_end' | 'time_start' | 'tags'
				>,
			) => ({
				body,
				method: 'POST',
				url: 'event/event/',
			}),
		}),
		eventAll: build.query<Event[], void>({
			providesTags: ['Event'],
			query: () => '/event/event/all/',
		}),
	}),
});

export const { useCreateEventMutation, useEventAllQuery } = eventApi;
