import styles from './index.module.css';

interface Props {
	title: string;
}

const ActionBar: React.FC<Props> = ({ title }) => {
	return (
		<nav className={styles.Nav}>
			<h1>{title}</h1>
		</nav>
	);
};

export default ActionBar;
