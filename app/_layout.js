import React from 'react';
import {Stack} from 'expo-router';
import  {QueryClient,QueryClientProvider} from 'react-query';
import { AppointmentProvider } from '../contexts/AppointmentContext';

const Layout = () => {
  const queryClient =new QueryClient();
  return (
   <QueryClientProvider client={queryClient }>
       <AppointmentProvider>
    <Stack>
          <Stack.Screen name="index" options={{headerShown:false}} />
          <Stack.Screen name="doctor/[id]" options={{title:"Detail"}}/>
          <Stack.Screen name="categories/index" options={{title:"categories"}}/>
          <Stack.Screen name="categories/[type]" options={{title:"Doctors List"}}/>
          <Stack.Screen name="confirm" options={{title:"Appointment Confirmation"}}/>
        </Stack>
        </AppointmentProvider>
      </QueryClientProvider>
  );
};
export default Layout;
