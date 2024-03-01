import React from 'react'
import {Link} from 'expo-router'

import '@tamagui/core/reset.css'
import {TamaguiProvider, View} from '@tamagui/core'

export default function index() {
	return (
		<TamaguiProvider>
			<View width={200} height={200} backgroundColor='red' />
		</TamaguiProvider>
	)
}
