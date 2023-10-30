import React from 'react';
import {
	TextInput,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

interface CustomButtonProps {
	title: string;
	disabled?: boolean;
	onPress?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
	title,
	disabled,
	onPress,
}) => {
	return (
		<TouchableOpacity
			disabled={disabled}
			onPress={onPress}
			style={{
				...styles.container,
				backgroundColor: disabled ? '#E5E5E5' : 'white',
			}}
		>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '45%',
		paddingVertical: 16,
		borderRadius: 4,
		display: 'flex',
		alignSelf: 'center',
		marginTop: 30,
		borderWidth: 1,
		borderColor: 'orange',
		opacity: 0.8,
		backgroundColor: 'white',
	},
	title: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '500',
	},
});

export default CustomButton;
