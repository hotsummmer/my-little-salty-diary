import styles from './index.module.css';
import { HTMLInputTypeAttribute, useState } from 'react';

interface Props {
	label?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	invalid?: boolean;
	onChange: (string) => void;
}

const Input: React.FC<Props> = ({ label, defaultValue = '', type, invalid = false, onChange }) => {
	const [value, setValue] = useState(defaultValue);
	return (
		<div className={styles.InputWrapper}>
			{label && (
				<label htmlFor={label} className={styles.Label}>
					{label}
				</label>
			)}
			<input
				className={`${styles.Input} ${invalid ? styles.Invalid : ''}`}
				id={label}
				type={type}
				value={value}
				onChange={(e) => {
					const value = e.target.value;
					setValue(value);
					onChange(value);
				}}
			/>
		</div>
	);
};

export default Input;
