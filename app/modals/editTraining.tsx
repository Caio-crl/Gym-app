import CustomButton from '@/components/CustomButton';
import CustomModal from '@/components/CustomModal';
import { GlobalContext } from '@/context/GlobalContext';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useContext, useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	Pressable,
	TextInput,
	TouchableOpacity,
} from 'react-native';
const {} = useContext(GlobalContext);

interface editTrainingProps {}

export const editTraining: React.FC<editTrainingProps> = ({}) => {
	const [exercise, setExercise] = useState('');
	const [series, setSeries] = useState('');
	const [repetitions, setRepetitions] = useState('');
	const [weight, setWeight] = useState('');
	const [training, setTraining] = useState([
		{
			exercise: exercise,
			series: series,
			repetitions: repetitions,
			weight: weight,
		},
	]);

	const navigation = useNavigation();
	const closed = () => {
		navigation.navigate('exercises', {});
	};

	const onChangeTraining = (value: string, index: number, field: string) => {
		const newTraining = [...training];
		const findedTraining = newTraining[index];
		findedTraining[field] = value;
		setTraining(newTraining);
	};
	const removeTraining = (index: number) => {
		const trainingRemoved = [...training];
		trainingRemoved.splice(index, 1);
		setTraining(trainingRemoved);
		console.log(index);
	};
	const save = () => {
		setTraining(training);
		navigation.navigate('exercises', {});
	};

	return (
		<CustomModal
			open={true}
			close={closed}
			placeholder='Title'
			// title={bannerTitle}
		>
			<ScrollView>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
					}}
				>
					<View
						style={{
							width: '50%',
							borderLeftWidth: 1,
							borderColor: 'orange',
							borderTopWidth: 1,
							borderBottomWidth: 1,
							marginTop: 40,
							paddingTop: 10,
							borderTopLeftRadius: 4,
						}}
					>
						<Text style={styles.subtitle}>Exercises</Text>
					</View>
					<View style={styles.serElement}>
						<Text
							style={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							Series
						</Text>
					</View>
					<View style={styles.repElement}>
						<Text
							style={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							Rep
						</Text>
					</View>
					<View style={styles.weightElement}>
						<Text
							style={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							Weight
						</Text>
					</View>
				</View>

				{training.map((training, index) => (
					<View style={styles.input}>
						<View
							style={{ justifyContent: 'center', marginLeft: 4 }}
						>
							<TouchableOpacity
								onPress={() => removeTraining(index)}
							>
								<AntDesign
									name='minuscircleo'
									size={15}
									color='orange'
								/>
							</TouchableOpacity>
						</View>
						<TextInput
							style={{
								width: '45%',
								fontSize: 15,
								borderColor: 'orange',
								borderBottomRightRadius: 4,
								paddingLeft: 10,
								paddingRight: 4,
							}}
							placeholder='Exercise name'
							placeholderTextColor={'gray'}
							value={training.exercise}
							onChangeText={(value: string) =>
								onChangeTraining(value, index, 'exercise')
							}
						/>
						<TextInput
							style={{
								width: '15%',
								fontSize: 15,
								borderLeftWidth: 1,
								borderColor: 'orange',
								textAlign: 'center',
							}}
							placeholder='Qnt'
							placeholderTextColor='gray'
							keyboardType='numeric'
							value={training.series}
							onChangeText={(value: string) =>
								onChangeTraining(value, index, 'series')
							}
						/>
						<TextInput
							style={{
								width: '15%',
								fontSize: 15,
								borderLeftWidth: 1,
								borderRightWidth: 1,
								borderColor: 'orange',
								textAlign: 'center',
							}}
							placeholder='Qnt'
							placeholderTextColor='gray'
							keyboardType='numeric'
							value={training.repetitions}
							onChangeText={(value: string) =>
								onChangeTraining(value, index, 'repetitions')
							}
						/>
						<TextInput
							style={{
								width: '15%',
								fontSize: 15,
								borderColor: 'orange',
								textAlign: 'center',
							}}
							placeholder='Kg'
							placeholderTextColor='gray'
							keyboardType='numeric'
							value={training.weight}
							onChangeText={(value: string) =>
								onChangeTraining(value, index, 'weight')
							}
						/>
					</View>
				))}
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						paddingTop: 30,
					}}
				>
					<Pressable
						onPress={() =>
							setTraining([
								...training,
								{
									exercise: exercise,
									series: series,
									repetitions: repetitions,
									weight: weight,
								},
							])
						}
					>
						<AntDesign
							name='pluscircleo'
							size={27}
							color='orange'
						/>
					</Pressable>
				</View>
				<CustomButton title='Save' onPress={save} />
			</ScrollView>
		</CustomModal>
	);
};

const styles = StyleSheet.create({
	subtitle: {
		width: '100%',
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 'bold',
		paddingBottom: 15,
		paddingLeft: 10,
	},
	serElement: {
		width: '15%',
		marginTop: 40,
		borderLeftWidth: 1,
		borderColor: 'orange',
		borderTopWidth: 1,
		justifyContent: 'center',
		borderBottomWidth: 1,
	},
	repElement: {
		width: '15%',
		marginTop: 40,
		borderLeftWidth: 1,
		borderColor: 'orange',
		borderRightWidth: 1,
		borderTopWidth: 1,
		justifyContent: 'center',
		borderBottomWidth: 1,
	},
	weightElement: {
		width: '20%',
		marginTop: 40,
		borderColor: 'orange',
		borderRightWidth: 1,
		borderTopWidth: 1,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderTopRightRadius: 4,
	},
	input: {
		width: '100%',
		display: 'flex',
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderLeftWidth: 1,
		alignSelf: 'center',
		borderColor: 'orange',
		height: 50,
		flexDirection: 'row',
	},
});

export default editTraining;
