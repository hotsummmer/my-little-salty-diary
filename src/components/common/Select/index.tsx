import styles from './index.module.css';
import { useCallback } from 'react';

type Option = {
	label: string;
	value: string;
};

interface Props {
	value?: string;
	valueKey?: string;
	options: Option[];
	onChange: (string) => void;
}

const Select: React.FC<Props> = ({ options, value = options[0].value, valueKey = value, onChange }) => {
	const handleOptionChange = useCallback((e) => onChange(e.target.value), [onChange]);
	return (
		<div className={styles.Select}>
			<label htmlFor={valueKey}>{value}</label>
			<select id={valueKey} defaultValue={value} onChange={handleOptionChange}>
				{options.map(({ label, value: optionValue }) => (
					<option key={optionValue} value={optionValue}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
