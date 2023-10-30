import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';

export const LayoutStack = () => {
	return (
		<Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='danceClass' />
			<Stack.Screen name='personalT' />
			<Stack.Screen name='nutritionist' />
			<Stack.Screen name='fightClass' />
			<Stack.Screen name='training' />
		</Stack>
	);
};

export default LayoutStack;
