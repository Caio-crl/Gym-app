import {
	StyleSheet,
	View,
	Text,
	Pressable,
	TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

interface CustomModalProps {
	title?: string;
	open?: boolean;
	close?: () => void;
	children?: React.ReactNode;
	customStyles?: any;

	placeholder?: string;
}

export const CustomModal: React.FC<CustomModalProps> = ({
	title,
	open,
	close,
	children,
	customStyles = {},

	placeholder,
}) => {
	return (
		<>
			{open && (
				<View style={styles.container}>
					<View style={{ ...styles.subContainer, ...customStyles }}>
						<View style={styles.header}>
							<Pressable
								onPress={close}
								style={{
									width: 50,
									position: 'absolute',
									left: 0,
									bottom: 15,
								}}
							>
								<AntDesign
									name='close'
									size={24}
									color='black'
								/>
							</Pressable>

							<Text style={styles.title}>{title}</Text>

							<View
								style={{
									justifyContent: 'center',
									// width: '',
								}}
							>
								<TextInput
									style={styles.input}
									placeholder={placeholder}
									placeholderTextColor='gray'
								></TextInput>
							</View>
						</View>
						{children}
					</View>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		position: 'absolute',
		zIndex: 999999,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'orange',
	},
	subContainer: {
		display: 'flex',
		position: 'absolute',
		backgroundColor: 'white',
		width: '100%',
		height: '90%',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		bottom: 0,
		paddingTop: 30,
		paddingHorizontal: 20,
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		width: '100%',
		borderBottomWidth: 2,
		borderColor: 'orange',
		paddingBottom: 10,
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '600',
	},

	input: {
		width: '100%',

		fontSize: 20,
	},
});

export default CustomModal;
