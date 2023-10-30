import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface CustomTextInputProps {
	validation?: boolean;
	value?: string | number;
	onChange?: () => void;
	placeholder: string;
	password?: boolean;
	error?: string;
	onPress?: () => void;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
	validation = true,
	value,
	onChange,
	placeholder,
	password,
	error,
	onPress,
}) => {
	return (
		<>
			<View
				style={{
					...styles.container,
					borderColor: validation ? 'orange' : 'red',
				}}
			>
				<TextInput
					style={styles.input}
					value={value}
					onChangeText={onChange}
					placeholder={placeholder}
					placeholderTextColor='#696969'
					secureTextEntry={password}
				/>
			</View>
			{!validation && (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 5,
					}}
				>
					<Ionicons
						name='alert-circle'
						size={24}
						color='#FF2B2B'
						style={{ paddingBottom: 40 }}
					/>
					<Text
						style={{
							textAlign: 'center',
							color: '#FF2B2B',
							fontSize: 12,
							paddingBottom: 40,
						}}
					>
						{error}
					</Text>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderWidth: 1.5,
		borderRadius: 4,
		alignSelf: 'center',
		borderColor: 'white',
		height: 50,
		marginBottom: 20,
		opacity: 0.8,
	},
	input: {
		fontSize: 18,
		width: '100%',
		paddingLeft: 10,
	},
});
