import { useForm } from 'react-hook-form';
import { Card, Button, Form, Input } from '../../../ui';
import { useCreateCityMutation } from '../api/business.api';

export default function CreateNewCity() {
	const formProps = useForm();

	const [createCity, { isLoading: creating }] = useCreateCityMutation();
	return (
		<Card padding={2.5}>
			<Form formProps={formProps} onSubmit={formProps.handleSubmit(createCity as any)}>
				<Input label="Название бизнеса" name="name" required />
				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
