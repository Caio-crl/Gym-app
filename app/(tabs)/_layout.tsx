import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import {
	Ionicons,
	AntDesign,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import Colors from '@/constants/Colors';

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				headerStyle: { backgroundColor: 'red' },
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<AntDesign name='home' size={24} color={color} />
					),
					headerRight: () => (
						<Link ref='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={
											Colors[colorScheme ?? 'light'].text
										}
										style={{
											marginRight: 15,
											opacity: pressed ? 0.5 : 1,
										}}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='exercises'
				options={{
					title: 'Exercises',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='weight-lifter'
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='user'
				options={{
					title: 'User',
					tabBarIcon: ({ color }) => (
						<AntDesign name='user' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
