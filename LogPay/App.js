import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/context/AuthContext';
import { CheckinProvider } from './src/context/CheckinContext';
import { CarrinhoProvider } from './src/context/CarrinhoContext';
import LoginScreen from './src/screens/LoginScreen';
import ClienteHomeScreen from './src/screens/ClienteHomeScreen';
import VendedorHomeScreen from './src/screens/VendedorHomeScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CheckinProvider>
        <CarrinhoProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="Login"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#007AFF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="ClienteHome" 
                component={ClienteHomeScreen}
                options={{ title: 'Área do Cliente' }}
              />
              <Stack.Screen 
                name="VendedorHome" 
                component={VendedorHomeScreen}
                options={{ title: 'Área do Vendedor' }}
              />
              <Stack.Screen 
                name="Carrinho" 
                component={CarrinhoScreen}
                options={{ title: 'Carrinho' }}
              />
              <Stack.Screen 
                name="Checkout" 
                component={CheckoutScreen}
                options={{ title: 'Finalizar Compra' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </CarrinhoProvider>
      </CheckinProvider>
    </AuthProvider>
  );
}