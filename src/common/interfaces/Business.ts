export interface Business {
	id: string;
	name: string;
	street: string;
	house: string;
	phones: string;
	website_url: string;
	sub_tags: [];
	social_links: string;
	latitude: Float32Array;
	longitude: Float32Array;
	type: string;
	city: string;
	business: number;
	city_id: number;
	business_id: string;
	day_of_week: number;
	start_time: string;
	end_time: string;
	work_schedule: [];
}
