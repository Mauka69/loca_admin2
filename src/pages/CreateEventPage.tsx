import { CreateEventForm } from '../modules/event';
import { PostBusinessForm } from '../modules/business';
import { Section } from '../ui';

export default function CreateEventPage() {
	return (
		<>
			<Section title="Создать событие">
				<CreateEventForm />
			</Section>
			<Section title="Создать бизнес карту">
				<PostBusinessForm />
			</Section>
		</>
	);
}