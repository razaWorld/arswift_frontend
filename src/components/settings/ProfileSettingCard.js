import { StyleSheet, Text, View } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { CustomInput,HeaderTitle } from '../global'
import { colors } from '../../theme'
const ProfileSettingCard = () => {
const [user,setuser]=useState({ firstName:'Jhon',lastName:'Doe',age:23})
useEffect(()=>{
  setuser({...user,firstName:'Smith'})
},[])

  return (
    <View style={styles.mainContainer}>
       <HeaderTitle description='Update your personal information' title='Profile Setting'/>
       <CustomInput label={'First Name '} value={user.firstName} placeholder='Jhon'/>
       <CustomInput label={"Last Name"} placeholder='Doe'/>
       <CustomInput label={"Email Address"} placeholder='Jhon@email.com'/>
       <CustomInput label={"Company (Optional)"} placeholder='Enter company name '/>

    </View>
  )
}

export default ProfileSettingCard

const styles = StyleSheet.create({
  mainContainer:{
     borderWidth:1,
     borderRadius:8,
     padding:10,
     borderColor:colors.lightGrey,
     gap:10
  }

})