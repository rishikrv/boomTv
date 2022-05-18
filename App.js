/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import {
     SafeAreaView,
     ScrollView,
     StatusBar,
     StyleSheet,
     Text,
     useColorScheme,
     View,
     FlatList
 } from 'react-native';
 
 
 const rounds = [
     {
         title: 'WINNERS BRACKET - ROUND 1',
         rd: 1,
         seeds: [
             {
                 id: 1,
                 teams: [{ name: 'Team 1' }, { name: 'Team 8' }],
             },
             {
                 id: 2,
                 teams: [{ name: 'Team 4' }, { name: 'Team 5' }],
             },
             {
                 id: 3,
                 teams: [{ name: 'Team 2' }, { name: 'Team 7' }],
             },
             {
                 id: 4,
                 teams: [{ name: 'Team 3' }, { name: 'Team 6' }],
             },
         ],
     },
     {
         title: 'WINNERS BRACKET - ROUND 2',
         rd: 2,
         seeds: [
             {
                 id: 5,
                 teams: [{ name: '' }, { name: '' }],
             },
             {
                 id: 6,
                 teams: [{ name: '' }, { name: '' }],
             },
         ],
     },
     {
         title: 'WINNERS BRACKET - FINALS',
         rd: 3,
         seeds: [
             {
                 id: 7,
                 teams: [{ name: '' }, { name: '' }],
             },
         ],
     },
     {
         title: 'GRAND - FINALS',
         rd: 4,
         seeds: [
             {
                 id: 14,
                 teams: [{ name: '' }, { name: '' }],
             },
         ],
     },
     {
         title: 'GRAND - FINALS (RESET)',
         rd: 5,
         seeds: [
             {
                 id: 15,
                 teams: [{ name: '' }, { name: '' }],
             },
         ],
     },
 ];
 
//  item heading
 const Item = ({ title }) => (
     <View style={styles.itemHead}>
         <Text style={styles.itemHeadTxt}>{title}</Text>
     </View>
 );
 
 
 const App: () => Node = () => {
 
     const renderItem = ({ item }) => (
         <View>
             <Item title={item.title} />
            {/* bracket view */}
             <View style={item.rd > 3 ? { ...styles.mainContainer, marginTop: -50 } : { ...styles.mainContainer, marginTop: 20 }}>
                 {item?.seeds.map(data => (
                     <>
                         <View style={styles.teamContainer}>
                             <View>
                                 <Text style={styles.itemHeadTxt}>{("0" + data?.id).slice(-2)}</Text>
                             </View>
                             <View>
                                 <View style={styles.teamCon}>
                                     <Text style={styles.colort}>{data?.teams[0]?.name}</Text>
                                 </View>
                                 <View style={{ ...styles.teamCon, marginTop: 10 }}>
                                     <Text style={styles.colort}>{data?.teams[1]?.name}</Text>
                                 </View>
                             </View>
                         </View>
                     </>
                 ))}
             </View>
 
             {item.rd === 1 &&
                 <>
                     <View style={styles.bracket}>
                         <View style={styles.bracketCon}>
                             <View style={styles.bracketDiv}></View>
                             <View style={styles.bracketLine}>
                             </View>
                         </View>
                     </View>
                     < View style={{ ...styles.bracket, marginTop: "103%", height: "17%" }}>
                         <View style={styles.bracketCon}>
                             <View style={styles.bracketDiv}></View>
                             <View style={styles.bracketLine}>
                             </View>
                         </View>
                     </View>
                 </>
             }
 
             {item.rd === 2 &&
                 <>
                     < View style={{ ...styles.bracket, marginTop: "54%", height: "30%" }}>
                         <View style={styles.bracketCon}>
                             <View style={styles.bracketDiv}></View>
                             <View style={styles.bracketLine}>
                             </View>
                         </View>
                     </View>
                 </>
             }
 
             {item.rd === 3 &&
                 <>
                     < View style={{ ...styles.bracketsem, marginTop: "74%", height: "8%" }}>
                         <View style={styles.bracketConsem}>
                             <View style={styles.bracketDivsem}></View>
                             <View style={styles.bracketLine}>
                             </View>
                         </View>
                     </View>
                 </>
             }
         </View >
     );
 
     const backgroundStyle = {
         backgroundColor: "#fff",
         flex: 1
     };
 
     return (
         <SafeAreaView style={backgroundStyle}>
             <FlatList
                 data={rounds}
                 horizontal={true}
                 renderItem={renderItem}
                 keyExtractor={item => item.id}
             />
         </SafeAreaView>
     );
 };
 
 const styles = StyleSheet.create({
     itemHead: {
         borderRadius: 1,
         borderWidth: 2,
         paddingHorizontal: 50,
         marginHorizontal: 10,
         paddingVertical: 5,
         marginTop: 15,
         borderColor: "#8f8f8f",
         width: 330,
         justifyContent: "center",
         alignContent: "center",
         alignItems: "center",
     },
     itemHeadTxt: { color: "#5c5c5c", fontWeight: "700" },
     mainContainer: {
         justifyContent: "space-around",
         flex: .6
     },
     teamContainer: {
         paddingHorizontal: 5,
         marginHorizontal: 10,
         paddingVertical: 5,
         marginTop: 20,
         justifyContent: "center",
         alignContent: "center",
         alignItems: "center",
         flexDirection: "row",
     },
     teamCon: {
         borderRadius: 1,
         borderWidth: 1,
         paddingHorizontal: 50,
         marginHorizontal: 10,
         paddingVertical: 5,
         borderColor: "#8f8f8f",
         justifyContent: "center",
         alignContent: "center",
         alignItems: "center",
         width: 260
     },
     colort: { color: "#5c5c5c" },
     bracket: {
         width: "100%",
         height: "15%",
         alignItems: "flex-end",
         position: "absolute",
         marginTop: "38%",
         marginLeft: "6%"
     },
     bracketsem: {
         width: "100%",
         height: "14.2%",
         alignItems: "flex-end",
         position: "absolute",
         marginTop: "34%",
         marginLeft: "6%"
     },
     bracketCon: {
         height: '100%',
         width: 50,
         flexDirection: "row",
         justifyContent: "center",
         alignContent: "center",
         alignItems: "center"
     },
     bracketConsem: {
         height: '100%',
         width: 50,
         flexDirection: "row",
     },
     bracketDiv: {
         height: '100%',
         width: "50%",
         borderColor: "#d4d4d4",
         borderBottomWidth: 1,
         borderTopWidth: 1,
         borderRightWidth: 1,
         borderRadius: 5
     },
     bracketDivsem: {
 
         height: '100%',
         width: "50%",
         borderColor: "#d4d4d4",
         borderBottomWidth: 1,
         borderRightWidth: 1,
         borderRadius: 5,
         marginRight: -2,
         marginTop: -1
     },
     bracketLine: {
         height: 1,
         width: "40%",
         backgroundColor: "#d4d4d4",
     }
 });
 
 export default App;
 