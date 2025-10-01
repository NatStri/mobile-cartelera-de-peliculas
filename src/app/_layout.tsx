import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="app"
        options={{
          drawerLabel: 'Home',
          title: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="user/[id]"
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
  );
}