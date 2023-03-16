import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { Button, Card, Form, Input } from '../../../ui';
import { useBusinessCardAllCityQuery, useCreateBusinessMutation } from '../api/business.api';
import { useEventSubTagsQuery } from '../../tag';
import {Autocomplete, Grid, TextField} from "@mui/material";



export default function PostBusinessForm() {
	const formProps = useForm();

	const [createBusiness, { isLoading: creating }] = useCreateBusinessMutation();
	const { data: city } = useBusinessCardAllCityQuery();
	const { data: subtags } = useEventSubTagsQuery();

	const cityOption = useMemo(
		() =>
			city?.map((v) => ({
				label: v.name,
				value: v.id,
			})) || [],
		[city],
	);
	const subtagsOption = useMemo(
		() =>
			subtags?.map((v) => ({
				label: v.name,
				value: v.id,
			})) || [],
		[subtags],
	);

	return (
		<Card padding={2.5}>
			<Form formProps={formProps} onSubmit={formProps.handleSubmit(createBusiness as any)}>
				<Input label="Название бизнеса" name="name" required />
				<Input label="Улица" name="street" required />
				<Input label="Дом" name="house" required />
				<Grid item xs={12}>
					<Autocomplete
						id="sub_tags"
						options={subtagsOption}
						getOptionLabel={(option) => option.label}
						fullWidth
						renderInput={(params) => (
							<TextField {...params} label="Выберите кухню" variant="outlined" />
						)}
						value={formProps.watch('sub_tags')}
						onChange={(event, newValue) => {
							formProps.setValue('sub_tags', newValue);
						}}
					/>
				</Grid>
				<Input label="Телефон" name="phones" required />
				<Input label="Веб сайт" name="website_url" />
				<Input label="Instagram" name="social_links" />
				<Grid item xs={12}>
					<Autocomplete
						id="business-combo-box"
						options={cityOption}
						getOptionLabel={(option) => option.label}
						fullWidth
						renderInput={(params) => (
							<TextField {...params} label="Выберите город" variant="outlined" />
						)}
						value={formProps.watch('city')}
						onChange={(event, newValue) => {
							formProps.setValue('city', newValue);
						}}
					/>
				</Grid>
				<Input label="Latitude" name="latitude" />
				<Input label="Longitude" name="longitude" />
				<p>week days</p>
				<br />
				<Input label="monday" name="work_schedule.0.day_of_week" />
				<Input label="Время начала" name="work_schedule.0.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.0.end_time" shrink type="time" step="1" />

				<Input label="tuesday" name="work_schedule.1.day_of_week" />
				<Input label="Время начала" name="work_schedule.1.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.1.end_time" shrink type="time" step="1" />

				<Input label="Wednesday" name="work_schedule.2.day_of_week" />
				<Input label="Время начала" name="work_schedule.2.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.2.end_time" shrink type="time" step="1" />
				<Input label="thursday" name="work_schedule.3.day_of_week" />
				<Input label="Время начала" name="work_schedule.3.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.3.end_time" shrink type="time" step="1" />

				<Input label="friday" name="work_schedule.4.day_of_week" />
				<Input label="Время начала" name="work_schedule.4.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.4.end_time" shrink type="time" step="1" />

				<Input label="Saturday" name="work_schedule.5.day_of_week" />
				<Input label="Время начала" name="work_schedule.5.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.5.end_time" shrink type="time" step="1" />

				<Input label="Saturday" name="work_schedule.6.day_of_week" />
				<Input label="Время начала" name="work_schedule.6.start_time" shrink type="time" step="1" />
				<Input label="Время начала" name="work_schedule.6.end_time" shrink type="time" step="1" />

				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
