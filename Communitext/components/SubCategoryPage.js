import React, { useState } from 'react';
import { ScrollView, Button, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux"; 
import { ADD_SUBCATEGORY } from '../store/constants';
import { _addSubcategory} from "../store/myPal_redux/actions";

const SubCategoryPage = ({ navigation, route }) => {
    const dispatch = useDispatch ()
    //const [Food, addFood] = useState(["apple", "banana"])
    const subcategories = useSelector (({subcategories}) => subcategories)
    const [IndFood, setIndFood] = useState("")
    const testFood = (newFood) => {
        if (newFood != "") {
            dispatch (_addSubcategory(newFood))
            setIndFood("")
        }

    }
    console.log(subcategories)
    return (
        <ScrollView>
            {subcategories.map((subcategory) => (
                <TouchableOpacity key={subcategory.id} onPress={() => alert(route.params.category)}>
                    <Text>
                        {subcategory.name}
                    </Text>
                </TouchableOpacity>
            ))}
            {/* <Text>
                Test
            </Text> */}
            <TextInput value={IndFood} placeholder="Enter new subcategory" onChangeText={text => setIndFood(text)} />
            <Button title="Submit" onPress={() => { testFood(IndFood) }} />




        </ScrollView>
    )
}
export default SubCategoryPage