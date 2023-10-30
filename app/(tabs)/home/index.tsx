import Container from '@/components/Container';
import { CustomTextInput } from '@/components/CustomTextInput';
import { Input } from '@/components/Input';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';

export const Home = () => {
	const navigation = useNavigation();

	const redirect = (parent: string, screen: string) => {
		navigation.navigate(parent, { screen: screen });
	};

	return (
		<Container
			title='Home'
			subtitle='Services'
			centralIcon={
				<Ionicons name='barbell-outline' size={40} color={'black'} />
			}
		>
			<Pressable
				onPress={() => {
					redirect('modals', 'nutritionist');
				}}
			>
				<Input
					title='Nutritionist'
					leftIcon={
						<View>
							<AntDesign name='right' size={18} />
						</View>
					}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					redirect('modals', 'fightClass');
				}}
			>
				<Input
					title='Fight Class'
					leftIcon={
						<View>
							<AntDesign name='right' size={18} color='black' />
						</View>
					}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					redirect('modals', 'danceClass');
				}}
			>
				<Input
					title='Dance Class'
					leftIcon={
						<View>
							<AntDesign name='right' size={18} color='black' />
						</View>
					}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					redirect('modals', 'personalT');
				}}
			>
				<Input
					title='Personal Trainer'
					leftIcon={
						<View>
							<AntDesign name='right' size={18} color='black' />
						</View>
					}
				/>
			</Pressable>
		</Container>
	);
};

const styles = StyleSheet.create({});

export default Home;
