import Banner from '@/components/Banner';
import Container from '@/components/Container';
import { GlobalContext } from '@/context/GlobalContext';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useContext, useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Pressable,
} from 'react-native';

export const Home = () => {
	const [training, setTraining] = useState([
		{
			name: '',
		},
	]);

	const onChangeTraining = (value: string, index: number) => {
		const trainingAdd = [...training];
		const changedTraining = trainingAdd[index];
		changedTraining.name = value;
		setTraining([...trainingAdd]);
	};
	const removeTraining = (index: number) => {
		const trainingRemoved = [...training];
		trainingRemoved.splice(index, 1);
		setTraining(trainingRemoved);
		console.log(index);
	};
	const navigation = useNavigation();
	const openBanner = (parent: string, screen: string) => {
		navigation.navigate(parent, { screen: screen });
	};
	const editBanner = (parent: string, screen: string) => {
		navigation.navigate(parent, { screen: screen });
	};

	return (
		<Container
			title='Exercises'
			subtitle='Acess your training'
			centralIcon={
				<Ionicons name='barbell-outline' size={40} color={'black'} />
			}
		>
			<ScrollView style={{ height: 500 }}>
				{training.map((training, index) => (
					<Banner
						// bannerTitle={''}
						bannerSubtitle='It has (X) exercises'
						edit='Edit'
						onChange={(value: string) =>
							onChangeTraining(value, index)
						}
						value={training.name}
						rightIcon={
							<View>
								<TouchableOpacity
									onPress={() => removeTraining(index)}
								>
									<AntDesign
										name='closecircleo'
										size={20}
										color='black'
									/>
								</TouchableOpacity>
							</View>
						}
						open={() => {
							openBanner('modals', 'training');
						}}
						editPress={() => {
							editBanner('modals', 'editTraining');
						}}
					/>
				))}
				<Pressable
					onPress={() => setTraining([...training, { name: '' }])}
				>
					<View style={{ alignItems: 'center' }}>
						<AntDesign
							name='pluscircleo'
							size={30}
							color='orange'
						/>
					</View>
				</Pressable>
				<View style={{ marginBottom: 30 }} />
			</ScrollView>
		</Container>
	);
};

const styles = StyleSheet.create({});

export default Home;
