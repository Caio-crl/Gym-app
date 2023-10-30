import React, { Children } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

interface ContainerProps {
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
	position?: string;
	leftIcon?: React.ReactNode;
	centralIcon?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
	title,
	subtitle,
	children,
	position,
	leftIcon,
	centralIcon,
}) => {
	return (
		<View style={styles.general}>
			<View
				style={{
					...styles.container,
					justifyContent: position,
				}}
			>
				{centralIcon && (
					<View
						style={{
							width: '100%',
							height: 100,
							backgroundColor: 'orange',
							justifyContent: 'space-between',
							flexDirection: 'row',
							padding: 30,
						}}
					>
						{centralIcon}
						{centralIcon}
					</View>
				)}
				{leftIcon && (
					<View
						style={{
							width: '100%',
							paddingLeft: 10,
							paddingTop: 55,
						}}
					>
						{leftIcon}
					</View>
				)}
			</View>
			<View>
				<Text style={styles.title}>{title}</Text>
				<View style={styles.outline}>
					<Text style={styles.subtitle}>. {subtitle}</Text>
				</View>
				{children}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	general: {
		flex: 1,
		position: 'relative',
		backgroundColor: 'white',
	},
	container: {
		width: '100%',
		backgroundColor: 'white',
		fontFamily: 'Cochin',
		shadowColor: 'white',
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 2,
		shadowRadius: 9.51,
		elevation: 15,
		height: 110,
	},
	title: {
		fontSize: 40,
		textAlign: 'center',
		color: 'black',
		paddingBottom: 20,
		fontFamily: 'Georgia',
		paddingTop: 20,
	},
	outline: {
		borderBottomWidth: 1,
		borderBottomColor: 'orange',
		marginBottom: 45,
		marginLeft: 25,
		width: '88%',
	},
	subtitle: {
		fontSize: 27,
		color: 'black',
		fontWeight: '400',
		fontFamily: 'Georgia',
		width: '100%',
		paddingTop: 30,
	},
});

export default Container;
