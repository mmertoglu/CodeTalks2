import React from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import styles from './ModalComponent.style'

const ModalComponent = ({isVisible,onClose,onCreate,buttonText,placeholder}) => {
    const [text,setText] = React.useState('')

    function handleCreate () {
        if (!text) {
            return;
        }
        onCreate(text)
        setText(null)
    }
    return (
       
            <Modal
            style={styles.modal}
                swipeDirection='down'
                animationInTiming={600}
                animationOutTiming={600}
                onBackdropPress={onClose}
                onSwipeComplete={onClose}
                onBackButtonPress={onClose}
                isVisible={isVisible}
            >
                <View style={styles.container} >
                <TextInput
                style={styles.input}
                multiline
                placeholder={placeholder}
                value={text}
                onChangeText={setText}            
                />
                <TouchableOpacity
                style={styles.button}
                onPress={handleCreate}
                >
                    <Text style={styles.buttontext} >{buttonText}</Text>
                </TouchableOpacity>
                </View>
            </Modal>
            
    )
}
export default ModalComponent;