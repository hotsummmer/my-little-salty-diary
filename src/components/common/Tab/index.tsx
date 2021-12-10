import styles from './index.module.css';
import { useCallback } from 'react';

interface TabItem {
	label: string;
	value: string;
}

interface Props {
	value?: string;
	items: TabItem[];
	onClick: (string) => void;
}

const Tab: React.FC<Props> = ({ items, value = items[0].value, onClick }) => {
	const handleTabItemClick = useCallback(
		(e) => {
			const value = e.target.dataset.value;
			onClick(value);
		},
		[onClick],
	);

	return (
		<ul className={styles.Tab}>
			{items.map(({ label, value: itemValue }) => (
				<li
					key={itemValue}
					className={`${itemValue === value ? styles.Selected : ''}`}
					data-value={itemValue}
					onClick={handleTabItemClick}
				>
					{label}
				</li>
			))}
		</ul>
	);
};

export default Tab;
