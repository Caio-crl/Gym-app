import Container from '@/components/Container';
import { GlobalContext } from '@/context/GlobalContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export const User = () => {
	const navigation = useNavigation();
	const logout = (parent: string, screen: string) => {
		navigation.navigate(parent, { screen: screen });
	};
	const { name, email } = useContext(GlobalContext);
	return (
		<Container
			title='User'
			subtitle='Personal Informations'
			centralIcon={
				<Ionicons name='barbell-outline' size={40} color={'black'} />
			}
		>
			<View style={styles.topiContainer}>
				<Text style={styles.topiTitle}>Name : {name}</Text>
			</View>
			<View style={styles.topiContainer}>
				<Text style={styles.topiTitle}>Email : {email}</Text>
			</View>
			<View style={styles.topiContainer}>
				<Text style={styles.topiTitle}>Password : **********</Text>
			</View>
			<Pressable
				onPress={() => {
					logout('app', 'index');
				}}
			>
				<Ionicons
					style={styles.imageLogout}
					name='power-outline'
					color='black'
					size={45}
				/>
				<Text style={styles.logout}>Log out</Text>
			</Pressable>
		</Container>
	);
};

const styles = StyleSheet.create({
	topiContainer: {
		width: '100%',
		borderBottomWidth: 2,
		borderColor: 'orange',
		marginTop: 30,
		paddingBottom: 50,
	},
	topiTitle: {
		color: 'black',
		paddingLeft: 20,
		fontSize: 18,
		fontWeight: '500',
	},
	imageLogout: {
		alignSelf: 'center',
		paddingTop: 30,
	},
	logout: {
		fontSize: 25,
		alignSelf: 'center',
		color: 'black',
		elevation: 15,
		fontWeight: '500',
	},
});

export default User;
