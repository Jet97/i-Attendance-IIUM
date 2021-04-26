import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles'

export default function ClassScreen(props) {

    return (
        <View style={styles.footerView}>
            <Text style={styles.footerText}>Class Screen</Text>
        </View>
    )
}
