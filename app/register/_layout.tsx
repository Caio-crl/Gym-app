import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';

export const LayoutStack = () => {
	return (
		<Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
			<Stack.Screen name='index' />
		</Stack>
	);
};

export default LayoutStack;
