import styles from './index.module.css';
import Button from '../Button';

interface Props {
	buttonValue?: string;
	valid?: boolean;
	onSubmit?: () => void;
}

const Form: React.FC<Props> = ({ buttonValue, valid = true, onSubmit, children }) => {
	return (
		<form
			className={styles.Form}
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit?.();
			}}
		>
			{children}
			{buttonValue && <Button disabled={!valid}>{buttonValue}</Button>}
		</form>
	);
};

export default Form;
