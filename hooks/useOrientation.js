import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export const useOrientation = () => {
	const [orientation, setOrientation] = useState(null);

	useEffect(() => {
		checkOrientation();
		const subscription = ScreenOrientation.addOrientationChangeListener(
			handleOrientationChange
		);
		return () => {
			ScreenOrientation.removeOrientationChangeListeners(subscription);
		};
	}, []);
	const checkOrientation = async () => {
		const orientation = await ScreenOrientation.getOrientationAsync();
		setOrientation(orientation);
	};

	const handleOrientationChange = (o) => {
		setOrientation(o.orientationInfo.orientation);
	};

	return orientation;
};