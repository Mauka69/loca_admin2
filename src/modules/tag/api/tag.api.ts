import api from '../../../common/api/api';
import { Tag } from '../../../common/interfaces';

const eventApi = api.injectEndpoints({
	endpoints: (build) => ({
		eventTags: build.query<Tag[], 'id' | void>({
			providesTags: ['Tag'],
			query: () => '/tags/event_tag/',
		}),
		createTag: build.mutation({
			invalidatesTags: ['Tag'],
			query: (body: Pick<Tag, 'name' | 'tag' | 'is_collection'>) => ({
				body,
				method: 'POST',
				url: 'tags/sub_tag/',
			}),
		}),
		eventSubTags: build.query<Tag[], void>({
			providesTags: ['Tag'],
			query: () => '/tags/sub_tag/all/',
		}),
	}),
});

export const { useEventTagsQuery, useCreateTagMutation, useEventSubTagsQuery } = eventApi;
