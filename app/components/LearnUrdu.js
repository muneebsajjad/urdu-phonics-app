import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet,Image,Dimensions } from 'react-native';
import Globals from '../../app/global_helpers/Globals';
import { getLetterImage } from '../../app/global_helpers/Helpers'
export default class LearnUrdu extends Component {
    
     static TMP_COUNT = [];            
      constructor(props) {
        super(props);        
        this.state = { secondEnterance : 0 };     
      }
       navigate(routName,letterObj){
        this.props.navigator.push({
             name:routName,
             letterObj: letterObj
        })
    }
    
     _handleAppStateChange = (nextAppState) => {
            if(nextAppState =='background'){
                getData();
            }
          }
          
  render() {
    return (  
        <ScrollView>    
        <View style={learn_styles.main_container}>
                    
                    <View style={learn_styles.option_box}>  
                    {Object.keys(Globals.URDU_ALPHABETS).map((key,index) => {
                              var screenWidth = ((Dimensions.get('window').width)/2)-5;  
                              var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP
                              return <TouchableOpacity key={index} letterName={Globals.URDU_ALPHABETS[key].name} onPress={this.navigate.bind(this,'LetterDetail',Globals.URDU_ALPHABETS[key])}> 
                                        <View style={{margin:2,borderRadius:12,flex:1,width: screenWidth, backgroundColor: 'lightgray',alignItems:'center',justifyContent:'center'}} key={index}>
                                                             <Image 
                                                                 style={{width: 180, height: 180,resizeMode: 'contain'}}
                                                                source={getLetterImage(Globals.URDU_ALPHABETS[key].name)} />
                                                             </View> 
                                  </TouchableOpacity>      
                        })} 
                  </View>
                 </View>                  
        </ScrollView>
    );
  }
}

var learn_styles = StyleSheet.create({
  main_container: {
    flex: 1, backgroundColor: 'aliceblue', flexDirection: 'row', justifyContent:'space-between', alignItems: 'flex-start', marginTop: 52
    /*flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginTop: 52,
    backgroundColor: 'aliceblue'*/
},
option_box:{
    flex: 1, flexDirection: 'row', flexWrap:'wrap'
  }

});

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);