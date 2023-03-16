import { PostBusinessForm } from '../modules/business';
import { Section } from '../ui';

export default function CreateBusinessPage() {
	return (
		<Section title="Создание города">
			<PostBusinessForm />
		</Section>
	);
}
