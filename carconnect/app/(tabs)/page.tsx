import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
        <Link href={"/(modals)/login"}>login</Link>
        <Link href={"/(modals)/bookings"}>bookings</Link>
        <Link href={'./listing/1290'}>Listening details</Link>
        
    </View>
  )
}

export default Page