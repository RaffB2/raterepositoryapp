import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 13,
    }
})

const RenderItem = ({ item }) => (
    <Item item={item} />
)

const Item = ({ item }) => (
    <View style={styles.item}>
        <CardHeading
            imgUri={{ uri: `${item.ownerAvatarUrl}` }}
            name={item.fullName}
            description={item.description}
            language={item.language}
        />
        <CardFooter
            stargazersCount={item.stargazersCount}
            forksCount={item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
        />
    </View>
)



const heading = StyleSheet.create({
    head: {
        flexDirection: 'row',
    },
    avatarContainer: {
        paddingRight: 17
    },
    avatar: {
        height: 48,
        width: 48,
    },
    headingText: {
        flex: 1,
        marginBottom: 15
    },
    languageTextBox: {
        marginTop: 8.5,
        backgroundColor: '#008fff',
        alignSelf: 'flex-start',
        borderRadius: 9,
    },
    languageText: {
        padding: 4,
    }
})
//Avatar,Name,language name
const CardHeading = ({ imgUri, name, description, language }) => (
    <View style={heading.head}>
        <View style={heading.avatarContainer}>
            <Image
                source={imgUri}
                style={heading.avatar}>
            </Image>
        </View>
        <View style={heading.headingText}>
            <Text textContent={name} fontWeight='bold' fontSize='large' />
            <Text textContent={description} />
            <View style={heading.languageTextBox}>
                <Text style={heading.languageText} textContent={language} color='primary' />
            </View>
        </View>
    </View>
)

const footer = StyleSheet.create({
    footerNumbers: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerNumbersDesc: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    centerVerticalText: {
        alignItems: 'center'
    }
})

//Numbers+Descs.
const CardFooter = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
    //round to K
    const round = (value) => {
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }
        return value;
    }
    stargazersCount = round(stargazersCount);
    forksCount = round(forksCount);

    return (
        <View>
            <View style={footer.footerNumbers}>
                <View style={footer.centerVerticalText}>
                    <Text textContent={stargazersCount} fontWeight='bold' />
                    <Text textContent="Stars" fontColor="gray" />
                </View>
                <View style={footer.centerVerticalText}>
                    <Text textContent={forksCount} fontWeight='bold' />
                    <Text textContent="Forks" fontColor="gray" />
                </View>
                <View style={footer.centerVerticalText}>
                    <Text textContent={reviewCount} fontWeight='bold' />
                    <Text textContent="Reviews" fontColor="gray" />
                </View>
                <View style={footer.centerVerticalText}>
                    <Text textContent={ratingAverage} fontWeight='bold' />
                    <Text textContent="Rating" fontColor="gray" />
                </View>
            </View>

        </View>
    )
}

export default {
    RenderItem
}