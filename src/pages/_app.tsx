import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import './_app.css';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
