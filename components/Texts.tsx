import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TextsProps {
	value?: string | number;
	placeholder: string;
	onChange?: () => void;
}

export const Texts: React.FC<TextsProps> = ({
	value,
	placeholder,
	onChange,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChange}
				placeholder={placeholder}
				placeholderTextColor='#696969'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		alignSelf: 'center',
		borderColor: 'orange',
		height: 50,
		justifyContent: 'center',
		opacity: 0.8,
	},
	input: {
		fontSize: 18,
		width: '50%',
		paddingLeft: 10,
	},
});

export default Texts;
