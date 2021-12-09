import styles from './index.module.css';

interface Props {
	disabled?: boolean;
	onClick?: () => void;
}

const Button: React.FC<Props> = ({ disabled, onClick, children }) => {
	return (
		<button className={styles.Button} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
