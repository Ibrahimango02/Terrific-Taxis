
import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, KeyboardAvoidingView } from "react-native"
import styles from '../styles/DefaultStyles.style'

export const CreateProfileScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = (data) => {
        console.log(data)
        // Send request to backend to create profile with all data as is
    }

    return (
        <View>
            <TextInput
                placeholder="Enter Name"
                onChangeText={setUsername}
                value={username}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Password"
                onChangeText={setPassword}
                value={password}
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                placeholder="Enter Email"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Phone"
                onChangeText={setPhone}
                value={phone}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Address"
                onChangeText={setAddress}
                value={address}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter City"
                onChangeText={setCity}
                value={city}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Province"
                onChangeText={setProvince}
                value={province}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Zip"
                onChangeText={setZip}
                value={zip}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Create Profile"
                    onPress={() => { handleSubmit({ username: username, password: password, email: email, phone: phone, address: address, city: city, state: province, zip: zip }) }}
                    style={styles.submitButton}
                />
            </View>
        </View>
    );
};