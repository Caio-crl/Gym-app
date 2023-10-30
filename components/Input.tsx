import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface InputProps {
	title?: string;
	leftIcon?: React.ReactNode;
	onPress?: () => void;
}

export const Input: React.FC<InputProps> = ({ title, leftIcon, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
			{leftIcon && (
				<View
					style={{
						width: '70%',
						justifyContent: 'center',
						paddingLeft: 160,
					}}
				>
					{leftIcon}
				</View>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 80,
		backgroundColor: 'white',
		borderColor: 'orange',
		borderWidth: 1.8,
		alignSelf: 'center',
		borderRadius: 8,
		marginBottom: 25,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	title: {
		fontSize: 18,
		color: 'black',
		fontFamily: 'Georgia',
		width: '60%',
		paddingLeft: 70,
		alignSelf: 'center',
	},
});
