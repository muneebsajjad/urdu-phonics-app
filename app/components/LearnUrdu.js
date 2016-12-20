import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,ScrollView,StyleSheet,Image } from 'react-native';
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
    
    
    
  render() {
    return (  
        <ScrollView>    
        <View style={learn_styles.main_container}>
                    
                    {Object.keys(Globals.URDU_ALPHABETS).map((key,index) => {
                              var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP
                              return <TouchableOpacity key={index} letterName={Globals.URDU_ALPHABETS[key].name} onPress={this.navigate.bind(this,'LetterDetail',Globals.URDU_ALPHABETS[key])}> 
                                        <View style={{margin:5, borderRadius:12,width: 170, height: 170, backgroundColor: randomColor}} key={index}>
                                                             <Image 
                                                                 style={{width: 160, height: 160,resizeMode: 'contain'}}
                                                                source={getLetterImage(Globals.URDU_ALPHABETS[key].name)} />
                                                             </View> 
                                  </TouchableOpacity>      
                        })} 
                  </View>
        </ScrollView>
    );
  }
}

var learn_styles = StyleSheet.create({
  main_container: {
            flex: 1,flexDirection: 'row',flexWrap:'wrap',alignItems:'flex-end',marginTop:52,backgroundColor: 'aliceblue'
  }
});

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);