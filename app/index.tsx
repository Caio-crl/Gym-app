import {
	View,
	StyleSheet,
	ImageBackground,
	Text,
	Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { CustomTextInput } from '@/components/CustomTextInput';
import { regexEmail, regexPassword } from '@/validations/valdiations';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export const FirstPage = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigation = useNavigation();
	const [emailValidation, setEmailValidation] = useState(true);
	const [passwordValidation, setPasswordValidation] = useState(true);

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
		console.log(passwordValid);
	};
	const login = () => {
		if (emailValidation && passwordValidation) {
			navigation.navigate('home', {});
		}
	};
	const createNow = () => {
		navigation.navigate('register', {});
	};

	return (
		<View style={styles.background}>
			<Text style={styles.title}>Bodybuilding Gym</Text>
			<View style={styles.outline}></View>
			<Text style={styles.subtitle}>Login</Text>
			<CustomTextInput
				value={email}
				placeholder='Email'
				onChange={(value) => onChangeEmail(value)}
			/>
			<CustomTextInput
				value={password}
				validation={passwordValidation}
				password={true}
				placeholder='Password'
				onChange={(value) => onChangePassword(value)}
				error={passwordValidation ? '' : 'The password is incorrect'}
			/>
			<Text style={styles.dontAccount}>Don't have an account?</Text>
			<Pressable style={styles.createOutline} onPress={createNow}>
				<Text style={styles.createAccount}>Create now !</Text>
			</Pressable>

			<CustomButton title='Login' onPress={login} />
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		position: 'relative',
		backgroundColor: 'white',
		width: '100%',
		fontFamily: 'Cochin',
		alignSelf: 'center',
		justifyContent: 'center',
	},

	outline: {
		backgroundColor: 'orange',
		width: '100%',
		paddingTop: 5,
	},
	title: {
		fontSize: 40,
		textAlign: 'center',
		color: 'black',
		paddingBottom: 10,
		paddingTop: 10,
		fontFamily: 'Georgia',
	},
	subtitle: {
		fontSize: 23,
		color: 'black',
		fontWeight: '600',
		fontFamily: 'Georgia',
		width: '100%',
		paddingTop: 30,
		paddingBottom: 40,
		paddingLeft: 20,
	},
	emailnotexist: {
		alignSelf: 'center',
		textAlign: 'center',
		color: '#FF2B2B',
		fontSize: 12,
		paddingBottom: 40,
	},
	dontAccount: {
		fontSize: 20,
		textAlign: 'center',
		color: 'black',
		fontFamily: 'Cochin',
		shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 7,
		// },
		// shadowOpacity: 2,
		// shadowRadius: 9.51,
		elevation: 15,
		paddingBottom: 8,
	},
	createAccount: {
		fontSize: 20,
		textAlign: 'center',
		color: 'black',
		fontFamily: 'Cochin',
		shadowColor: '#000',
		elevation: 15,
	},
	createOutline: {
		borderBottomWidth: 1,
		width: '30%',
		alignSelf: 'center',
		borderColor: 'black',
		marginBottom: 10,
	},
});

export default FirstPage;
