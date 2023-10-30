import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

interface userContainerValues {
	name: string;
	email: string;
	password: string;
}

export const userContainerValues = () => {
	const [name, setName] = useState('');
	const [users, setUsers] = useState<userContainerValues[]>([]);
	const [loginVerified, setLoginVerified] = useState(true);
	const navigation = useNavigation();
	const createUser = (name: string, email: string, password: string) => {
		const newUser = {
			name: name,
			email: email,
			password: password,
		};
		setUsers([...users, newUser]);
	};

	const filterUserBy = (value: string, key: string) => {
		const findedUsers = users.find((item) => item[key] === value);
		return findedUsers && true;
	};

	const login = (email: string, password: string) => {
		const userFinded = filterUserBy(email, 'email');
		console.log(userFinded);
		if (userFinded) {
			navigation.navigate('home', {});
		} else {
			setLoginVerified(false);
		}
	};
	const register = (email: string, password: string) => {
		const userFinded = filterUserBy(email, 'email');
		console.log(userFinded);
		if (userFinded) {
			return true;
		} else {
			navigation.navigate('home', {});
		}
	};
	return {
		name,
		users,
		createUser,
		filterUserBy,
		login,
		register,
		loginVerified,
		setLoginVerified,
	};
};

export const UserContainer = createContainer(userContainerValues);
