import Container from '@/components/Container';
import CustomButton from '@/components/CustomButton';
import { CustomTextInput } from '@/components/CustomTextInput';
import {
	regexEmail,
	regexName,
	regexPassword,
} from '@/validations/valdiations';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { GlobalContext } from '../../context/GlobalContext';

export const Register = () => {
	const [emailValidation, setEmailValidation] = useState(true);
	const [passwordValidation, setPasswordValidation] = useState(true);
	const [nameValidation, setNameValidation] = useState(true);

	const { name, email, password, setName, setEmail, setPassword } =
		useContext(GlobalContext);

	const navigation = useNavigation();

	const onChangeName = (value) => {
		setName(value);
		const nameValid = regexName.test(value);
		if (nameValid) {
			setNameValidation(true);
		} else {
			setNameValidation(false);
		}
		console.log(nameValid);
	};

	const onChangeEmail = (value) => {
		setEmail(value);
		const emailValid = regexEmail.test(value);
		if (emailValid) {
			setEmailValidation(true);
		} else {
			setEmailValidation(false);
		}
		console.log(emailValid);
	};

	const onChangePassword = (value) => {
		setPassword(value);
		const passwordValid = regexPassword.test(value);
		if (passwordValid) {
			setPasswordValidation(true);
		} else {
			setPasswordValidation(false);
		}
		console.log(passwordValid);
	};

	const createNow = () => {
		if (emailValidation && passwordValidation)
			navigation.navigate('home', {});
	};
	// sem uso por conta do container

	const leftArrow = () => {
		navigation.navigate('index', {});
	};

	// console.log(users);
	const register = () => {
		if (emailValidation && passwordValidation) {
			navigation.navigate('home', {});
		}
	};

	return (
		<Container
			title='Welcome'
			subtitle='Create your account'
			leftIcon={
				<Ionicons
					name='chevron-back-outline'
					size={30}
					onPress={leftArrow}
				/>
			}
		>
			{/* <Text>{userContainer.name}</Text> */}
			<CustomTextInput
				placeholder='Name'
				value={name}
				validation={nameValidation}
				onChange={(value) => onChangeName(value)}
				error={nameValidation ? '' : 'Please complete with your name'}
			/>
			<CustomTextInput
				placeholder='Email'
				value={email}
				validation={emailValidation}
				onChange={(value) => onChangeEmail(value)}
				error={
					emailValidation ? '' : 'Please enter a valid email address'
					// ? 'This email already exist'
				}
			/>
			<CustomTextInput
				placeholder='Password'
				value={password}
				password
				validation={passwordValidation}
				onChange={(value) => onChangePassword(value)}
				error={
					passwordValidation ? '' : 'Please enter a valid password'
				}
			/>
			<Text style={styles.rulesPassword}>
				(Minimum eight characters, at least one letter, one number and
				one special character)
			</Text>
			<CustomButton title='Create Now' onPress={register} />
		</Container>
	);
};

const styles = StyleSheet.create({
	rulesPassword: {
		fontSize: 12,
		color: 'gray',
		paddingLeft: 20,
		paddingRight: 15,
		marginBottom: 10,
	},
});

export default Register;
