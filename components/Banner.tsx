import { GlobalContext } from '@/context/GlobalContext';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// const { bannerTitle } = useContext(GlobalContext);

interface BannerProps {
	// bannerTitle: string;
	bannerSubtitle: string;
	onChangeText: () => void;
	rightIcon: React.ReactNode;
	open: () => void;
	editPress: () => void;
	edit: string;
}

export const Banner: React.FC<BannerProps> = ({
	// bannerTitle,
	bannerSubtitle,
	onChangeText,
	rightIcon,
	open,
	editPress,
	edit,
}) => {
	return (
		<View style={styles.container}>
			{rightIcon && (
				<View
					style={{
						width: '70%',
						marginLeft: 335,
						paddingTop: 12,
					}}
				>
					{rightIcon}
				</View>
			)}
			<View>
				<Text style={styles.bannerTitle}>Exercise x</Text>
				<TouchableOpacity onPress={open}>
					<Ionicons
						name='chevron-forward-outline'
						size={24}
						color='orange'
						style={styles.arrow}
					/>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingTop: 30,
					}}
				>
					<Text style={styles.bannerSubtitle}>{bannerSubtitle}</Text>
					<Pressable onPress={editPress}>
						<View
							style={{
								borderBottomWidth: 2,
								borderColor: 'black',
								width: '65%',
							}}
						>
							<Text style={styles.edit}>{edit}</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 160,
		backgroundColor: 'white',
		alignSelf: 'center',
		borderRadius: 8,
		marginBottom: 30,
		borderColor: 'orange',
		borderWidth: 1.8,
	},
	bannerTitle: {
		width: '100%',
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		fontFamily: 'Georgia',
		paddingLeft: 20,
	},
	arrow: {
		marginLeft: 320,
		alignSelf: 'center',
		marginTop: 10,
	},
	bannerSubtitle: {
		width: '87%',
		fontSize: 16,
		color: 'orange',
		fontFamily: 'Georgia',
		paddingLeft: 20,
	},
	edit: {
		width: '100%',
		fontSize: 18,
		color: 'black',
		fontFamily: 'Georgia',
		marginRight: 20,
	},
});

export default Banner;
