import { StyleSheet,Text,View } from "react-native";

function ProfileScreen(){
return (
    <View style={styles.container}>
<View>
  <View />
  <View style ={styles.ProfileImage} >
  <Text style={styles.profileName}>João da Silva</Text>
<Text style={styles.profileRole}>Desenvolvedor React Native</Text>
  </View>
</View>
<Text style={styles.sectionTitle}>Habilidades</Text>
<View style ={styles.skillsSection}>
  <View style= {styles.skillBadge}>
  <Text style={styles.skillName}>React Native</Text>
</View>
<View style={styles.skillBadge}>
  <Text style={styles.skillName}>JavaScript</Text>
</View>
<View style={styles.skillBadge}>
  <Text style={styles.skillName}>CSS</Text>
</View>

</View>

    </View>
);
const styles = StyleSheet.create({
container: { flex:1,backgroundColor:"#FFFBFE",padding:16},

ProfileSection:{flexDirection:"row",alignItems:"center",marginBottom:24,},

ProfileImage:{width:80,height:80,borderRadius:40,
    backgraundColor:"EADDFF",marginRight:16,},

profileName:{fontSize:16,color:"#49454F",},

sectionTitle: {fontSize:18,fontWeight:"500",color:"#1C1B1F",marginBottom:8,},

skillsSection: {flexDirection:"row",flexWrap:"wrap",gap:8,},

skillBadge: { backgroundColor: "#E8DEF8", paddingHorizontal: 12,
 paddingVertical: 6, borderRadius: 16, },

 skILLName:{fontSize:14,color:"1C1B1F",},


});
}export default ProfileScreen;
