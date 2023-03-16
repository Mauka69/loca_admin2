import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Form, Input } from '../../../../ui';
import { useGetBusinessCardsQuery } from '../../../business';
import { useEventTagsQuery } from '../../../tag';
import { useCreateEventMutation } from '../../api/event.api';
import {Autocomplete, Grid, TextField} from "@mui/material";

export default function CreateEventForm() {
	const formProps = useForm();
	const [createEvent, { isLoading: creating }] = useCreateEventMutation();
	const { data: tags, isLoading } = useEventTagsQuery();
	const { data: businessCards } = useGetBusinessCardsQuery();

	const tagsOptions = useMemo(
		() =>
			tags?.map((v) => ({
				label: v.name,
				value: v.id,
			})) || [],
		[tags],
	);
	const businessOption = useMemo(
		() =>
			businessCards?.map((v) => ({
				label: v.name,
				value: v.id,
			})) || [],
		[businessCards],
	);
	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	return (
		<Card padding={1.5}>
			<Form
				formProps={formProps}
				onSubmit={formProps.handleSubmit((data) => {
					if (!data.time_start || !data.time_end) {
						data.time_start = null;
						data.time_end = null;
					}
					createEvent(data as any);
				})}
			>
				<Input label="Название" name="name" required />
				<Input label="Описание" name="description" required />
				<Input label="Дата начала" name="start" required shrink type="date" />
				<Input label="Время начала" name="time_start" shrink type="time" step="1" />
				<Input label="Дата окончания" name="end" required shrink type="date" />
				<Input label="Время окончания" name="time_end" shrink type="time" step="1" />

				<Grid item xs={12}>
					<Autocomplete
						id="business-combo-box"
						options={businessOption}
						getOptionLabel={(option) => option.label}
						fullWidth
						renderInput={(params) => (
							<TextField {...params} label="Выберите локацию" variant="outlined" />
						)}
						value={formProps.watch('business')}
						onChange={(event, newValue) => {
							formProps.setValue('business', newValue);
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<Autocomplete
						id="business-combo-box"
						options={tagsOptions}
						getOptionLabel={(option) => option.label}
						fullWidth
						renderInput={(params) => (
							<TextField {...params} label="Выберите праздник" variant="outlined" />
						)}
						value={formProps.watch('tags')}
						onChange={(event, newValue) => {
							formProps.setValue('tags', newValue);
						}}
					/>
				</Grid>
				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
