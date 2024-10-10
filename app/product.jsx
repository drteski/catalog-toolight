import { View, Text } from 'react-native';
import { useNavigation } from 'expo-router';

const Product = () => {

	const navigation = useNavigation();
	return (<View>
		<Text>produkt</Text>
	</View>);
};

export default Product;