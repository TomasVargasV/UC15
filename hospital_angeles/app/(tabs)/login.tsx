import { StyleSheet } from 'react-native';

export default function LoginScreen() {
    return (
        <div style={styles.container}>
            <section style={styles.header}>
                <div style={styles.logo}>LOGO</div>
                <div style={styles.greeting}>Seja bem vindo!</div>
            </section>
            <section style={styles.loginSection}>

            </section>
            <section style={styles.signinSection}>

            </section>
        </div>
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
    },
    logo: {
        display: 'flex',
        height: 150,
        alignItems: 'center',
        alignSelf: 'center',
    },
    greeting: {
        display: 'flex',
        height: 150,
        alignItems: 'center',
        alignSelf: 'center',
    },
    loginSection: {

    },
    signinSection: {

    }
});
