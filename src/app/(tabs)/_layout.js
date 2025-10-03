import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function tabLayout() {
    return (
        <Tabs ScreenOptions={{ tabBarActiveBackgroundColor: 'blue',}}>
            <Tabs.Screen name="Listado de Peliculas"
                options={{
                    drawerLabel: 'Lista',
                    title: 'Listado de Peliculas',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    )

}