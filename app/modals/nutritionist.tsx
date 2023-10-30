import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import CustomModal from '@/components/CustomModal';
import { useNavigation } from 'expo-router';
import { ReactNode, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomButton from '@/components/CustomButton';

interface NutritionistProps {}

export const Nutritionist: React.FC<NutritionistProps> = ({}) => {
	const closed = () => {
		navigation.navigate('home', {});
	};
	const navigation = useNavigation();
	const [openPicker, setOpenPicker] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{ label: 'Carlos', value: 'Carlos' },
		{ label: 'Robert', value: 'Robert' },
		{ label: 'Richard', value: 'Richard' },
		{ label: 'James', value: 'James' },
	]);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentTime, setCurrentTime] = useState(new Date(Date.UTC(3, 0, 0)));

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: any) => {
		console.warn('A date has been picked: ', date);
		hideDatePicker();
	};
	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleConfirmTime = (time: any) => {
		console.warn('A time has been picked: ', time);
		hideTimePicker();
	};

	const handleChangeDatePicker = (value) => {
		setCurrentDate(value);
	};
	console.log(currentDate);

	const handleChangeTimePicker = (value) => {
		setCurrentTime(value);
	};
	console.log(currentTime);
	DropDownPicker.setTheme('LIGHT');

	const confirm = () => {
		navigation.navigate('home', {});
	};

	const optionsDate = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const optionsTime = {
		hour: 'numeric',
		minute: 'numeric',
		dayPeriod: 'string',
		hour12: true,
	};

	return (
		<CustomModal open={true} title='Nutritionist' close={closed}>
			<Text style={styles.topics}>Nutritionist</Text>
			<DropDownPicker
				style={styles.picker}
				open={openPicker}
				value={value}
				items={items}
				setOpen={setOpenPicker}
				setValue={setValue}
				setItems={setItems}
				badgeColors={['white']}
				badgeDotColors={['orange']}
				dropDownContainerStyle={{
					borderColor: 'orange',
					marginTop: 15,
				}}
				translation={{
					PLACEHOLDER: 'Select',
				}}
				placeholderStyle={{
					color: 'rgba(102, 112, 128, 1)',
					paddingLeft: 5,
					fontSize: 16,
				}}
				containerStyle={{
					paddingTop: 15,
				}}
			/>
			<Text style={styles.topics}>Date</Text>
			<TouchableOpacity style={styles.datetime} onPress={showDatePicker}>
				<Button
					title={currentDate.toLocaleDateString('en-US', optionsDate)}
					onPress={showDatePicker}
				/>
			</TouchableOpacity>

			<DateTimePickerModal
				onChange={(value) => handleChangeDatePicker(value)}
				isVisible={isDatePickerVisible}
				mode='date'
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				buttonTextColorIOS='orange'
				locale='en_US'
			/>

			<Text style={styles.topics}>Time</Text>
			<TouchableOpacity style={styles.datetime} onPress={showTimePicker}>
				<Button
					title={currentTime.toLocaleTimeString('en-US', optionsTime)}
					onPress={showTimePicker}
				/>
			</TouchableOpacity>
			<DateTimePickerModal
				onChange={(value) => handleChangeTimePicker(value)}
				isVisible={isTimePickerVisible}
				mode='time'
				onConfirm={handleConfirmTime}
				onCancel={hideTimePicker}
				buttonTextColorIOS='orange'
				locale='en_US'
			/>
			<CustomButton title='Confirm' onPress={confirm} />
		</CustomModal>
	);
};

const styles = StyleSheet.create({
	picker: {
		borderColor: 'orange',
	},
	topics: {
		width: '100%',
		paddingTop: 30,
		fontSize: 16,
		fontStyle: 'italic',
	},
	datetime: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		alignSelf: 'center',
		borderColor: 'orange',
		height: 50,
		opacity: 0.8,
		marginTop: 15,
		alignItems: 'center',
	},
});

export default Nutritionist;
