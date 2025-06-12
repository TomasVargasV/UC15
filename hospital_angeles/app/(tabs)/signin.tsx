import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [estado, setEstado] = useState('');
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Image source={{ uri: 'https://en.drdavidvallebueno.com/wp-content/uploads/logo-HA.png' }} style={styles.logo} />
                    <Text style={styles.greetingSubtext}>Conclua seu cadastro conosco:</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    secureTextEntry
                    value={cpf}
                    onChangeText={setCpf}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    secureTextEntry
                    value={estado}
                    onChangeText={setEstado}
                />
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => router.push('/inicio')}
                >
                    <Text style={styles.signupButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%',
        backgroundColor: 'lightgray'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 100
    },
    logo: {
        display: 'flex',
        height: 175,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    greetingSubtext: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        marginTop: 40,
        fontSize: 25,
        color: 'blue'
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    signupButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: 'blue',
        alignSelf: 'center',
        alignItems: 'center',
        width: 200
    },
    signupButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
