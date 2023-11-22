import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { WPost } from '../types';
import { FontAwesome } from '@expo/vector-icons';

type PostListItemProps = {
    apost: WPost;
};

type FooterButtonProp = {
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
};

const FooterButton = ({ text, icon }: FooterButtonProp) => (
    <View style={styles.footerButton}>
        <FontAwesome name={icon} size={16} color="gray" />
        <Text style={styles.footerButtonText}>{text}</Text>
    </View>
);
const callAlert = () =>
    Alert.alert(
        'calling ',
        '+91 9395072273',
        [
            {
                text: 'Stop call ',

            },
        ],

    );

const WorkListItem = ({ apost }: PostListItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: apost.author.image }} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{apost.author.name}</Text>
                    <Text style={styles.position}>{apost.author.position}</Text>
                </View>
            </View>

            <Text style={styles.content}>{apost.content}</Text>
            {apost.image && (
                <Image source={{ uri: apost.image }} style={styles.postImage} />
            )}

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={callAlert}>
                    <FooterButton text="call now" icon="phone" />
                    <Text>.</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                <FooterButton text="." icon="rupee" />
                <Text style={styles.footerButton}>{apost.price}</Text>

                </TouchableOpacity>

                

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        maxWidth: 600,
        width: '100%',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontWeight: '600',
        marginBottom: 5,
    },
    position: {
        fontSize: 12,
        color: 'grey',
    },
    content: {
        margin: 15,
        marginTop: 0,
        fontSize: 18,
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',


    },
    footerButtonText: {
        marginLeft: 5,
        color: 'black',
        fontWeight: '700',
    },
});

export default WorkListItem;