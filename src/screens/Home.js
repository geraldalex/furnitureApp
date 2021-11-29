import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, icons, FONTS, images } from '../constants/'
import { useFonts } from 'expo-font'

 



const ScrollableTab = ({tabList, selectedTab, onPress}) => {

    const renderItem = ({item}) => {
        return(
        <TouchableOpacity
        style={{marginHorizontal: SIZES.padding}}
        onPress={() => onPress(item)}
        >
            {console.log(item.name)}
            <Text style={{color:COLORS.secondary, ...FONTS.body2}}>{item.name}</Text>
            {
                selectedTab.id === item.id &&
                <View style={{alignItems:'center', marginTop: SIZES.base}}>
                    <View style={{width:10, height:10, borderRadius:5, backgroundColor:COLORS.blue}}>

                    </View>
                </View>
            }
        </TouchableOpacity>
        )
    }
    return(
        <View>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tabList}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            />

        </View>
    )
}

const ScrollableCard = ({navigation, productList}) => {


const renderCard = ({item}) => {
    return(
<TouchableOpacity style={{marginLeft:SIZES.padding}}
onPress={() => navigation.navigate('ItemDetail', {"itemInfo":item})}
>
<View style={{width:SIZES.width/2}}>
<Image 
source={item.image}
resizeMode='cover'
style={{
    borderRadius:SIZES.radius*2,
    width:'100%',
    height:"100%"
}}
/>

<View style={{position:'absolute', top: 15, left:"10%", right:"10%"}}>
<Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>Futniture</Text>
<Text style={{marginTop:SIZES.base ,color: COLORS.white, ...FONTS.h2}}>{item.productName}</Text>
</View>

<View style={{position:'absolute', bottom:20, left:30, borderRadius:15,paddingVertical:10, paddingHorizontal:15, backgroundColor:COLORS.transparentLightGray }}>
<Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
</View>
</View>

</TouchableOpacity>
    )
}


return(
    <View style={{marginTop:SIZES.padding}}>
<FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={productList}
 renderItem={renderCard}
 keyExtractor={item=> item.productId}

/>
    </View>
)
}
const Home = ({navigation}) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

//Render

function renderHeader(){
    return(
        <View style={{paddingHorizontal: SIZES.padding}}>
<View style={{flexDirection:'row', marginTop: StatusBar.currentHeight}}>
    <TouchableOpacity style={{flex:1}}
    onPress={() => console.log("Menu onClicked")}
    >
        <Image 
        source={icons.menu}
        resizeMode='contain'
        style={{
            width:25,
            height:25
        }}
        />
    </TouchableOpacity>

    <TouchableOpacity style={{flex:1, alignItems:'flex-end'}}
    onPress={() => console.log("Cart onClicked")}>
        <Image 
        source={icons.cart}
        resizeMode='contain'
        style={{
            width:25,
            height:25
        }}
        />
    </TouchableOpacity>
</View>
        </View>
    )
}

function renderTitle (title) {
    return(
        <View style={{marginTop:SIZES.padding, marginHorizontal:SIZES.padding}}>
            <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>Collection of</Text>
            <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
        </View>
    )
}

function renderPromotionCard() {
    return(
        <View style={[styles.shadow, {
            flexDirection:'row',
            marginHorizontal:SIZES.padding,
            padding: SIZES.radius,
            height: 110,
            borderRadius:20,
            backgroundColor: COLORS.white
        }]}>

            <View style={{
                width:50,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.lightGray2,
                borderRadius:20
            }}>
<Image 
source={images.sofa}
resizeMode='contain'
style={{
    width:'60%',
    height: '60%'
}}
/>
</View>

{/* Wordings sections */}

<View style={{flex:1, marginLeft:SIZES.radius, justifyContent:'center'}}>
    <Text style={{...FONTS.h2}}>Special Offer</Text>
    <Text style={{...FONTS.body3}}>Adding to your cart</Text>
</View>

{/* Button */}

<View style={{marginRight:SIZES.radius, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity
    style={{
backgroundColor:COLORS.primary,
justifyContent:'center',
alignItems:'center',
height:'70%',
width:40,
borderRadius:10
    }}
    onPress={() => console.log("Promo om clicked")}
    >
<Image 
source={icons.chevron}
resizeMode='contain'
style={{
height:'50%',
width:'50%'
}}

/>
    </TouchableOpacity>
</View>
        </View>
    )
}

const [loaded] = useFonts({
      
      
    "Roboto-Bold": require('../../src/assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Black": require('../../src/assets/fonts/Roboto-Black.ttf'),
    "Roboto-Regular": require('../../src/assets/fonts/Roboto-Regular.ttf'),
   
  });
  
  if (!loaded) {
    return null;
  }
    return (
        <SafeAreaView style={styles.container}>
           {renderHeader()}
          
           {renderTitle(selectedTab.title)}
          
           <ScrollableTab
           tabList={tabList}
           selectedTab={selectedTab}

           onPress={(item) =>setSelectedTab(item)}

           />
<View style={{flex:1}}>
           <ScrollableCard 
           navigation={navigation}
           productList={selectedTab.productList}
           />
              </View>

              {/* Footer */}

              <View style={{height:'19%', justifyContent:'flex-end'}}>
{renderPromotionCard()}
              </View>
        </SafeAreaView>
     
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height:3
        },
        shadowOpacity:0.32,
        shadowRadius:5.46,
        elevation:9




    }
})
