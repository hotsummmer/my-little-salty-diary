import styles from './index.module.css';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
	return <section className={styles.Container}>{children}</section>;
};

export default Container;
