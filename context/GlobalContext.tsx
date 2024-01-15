import { createContext, useState } from 'react';

type GlobalValueType = {
	name: string;
	email: string;
	password: string;
	// bannerTitle: string;

	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
};
export const GlobalContext = createContext<GlobalValueType>({
	name: '',
	email: '',
	password: '',
	// bannerTitle: '',
	setName: () => {},
	setEmail: () => {},
	setPassword: () => {},
});

interface InfosProviderProps {
	children: React.ReactNode;
}
export const InfosProvider: React.FC<InfosProviderProps> = ({ children }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<GlobalContext.Provider
			value={{
				name,
				email,
				password,
				// bannerTitle,
				setName,
				setEmail,
				setPassword,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
