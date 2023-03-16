import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Select, Button, Card, Form, Input } from '../../../../ui';
import { useGetBusinessCardsQuery } from '../../../business';
import { useEventTagsQuery } from '../../../tag';
import { useCreateEventMutation } from '../../api/event.api';

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
				<Input label="Время окончания" name="time_end" type="time" step="1" />

				<Select defaultValue={[]} name="business" options={businessOption} searchable />
				<br />
				<Select defaultValue={[]} multiple name="tags" options={tagsOptions} />
				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
