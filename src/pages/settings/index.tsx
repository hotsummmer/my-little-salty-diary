import ActionBar from '../../components/common/ActionBar';
import { useState } from 'react';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import Form from '../../components/common/Form';

const Settings: React.FC = () => {
	const [date, setDate] = useState('한달');
	const [budget, setBudget] = useState(0);
	const handleButtonClick = () => alert('하이!');

	return (
		<>
			<ActionBar title="가계부 설정" />
			<Container>
				<Form onSubmit={handleButtonClick} buttonValue="확인">
					<Input label="날짜" defaultValue={date} onChange={(date) => setDate(date)} invalid={true} />
					<Input label="금액" defaultValue={`${budget}`} onChange={(amount) => setBudget(Number(amount))} />
				</Form>
			</Container>
		</>
	);
};

export default Settings;
