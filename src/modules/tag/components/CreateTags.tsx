import { useForm } from 'react-hook-form';
import { Card, Form, Button, Input } from '../../../ui';
import { useCreateTagMutation } from '../api/tag.api';

export default function CreateTags() {
	const formProps = useForm();

	const [createTags, { isLoading: creating }] = useCreateTagMutation();

	return (
		<Card padding={1.5}>
			<Form formProps={formProps} onSubmit={formProps.handleSubmit(createTags as any)}>
				<Input label="Название" name="name" />
				<Input label="tag" name="tag" />
				<Input label="is_collection" name="is_collection" />
				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
