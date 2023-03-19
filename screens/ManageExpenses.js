import { useLayoutEffect } from "react";
import { Text, View } from "react-native"
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from '../contances/styles';
import { StyleSheet } from "react-native";


function ManageExpenses({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });

    }, [navigation, isEditing]);

    function deleteExpenseHandler() {

    }


    return (
        <View style={styles.container}> 
            {isEditing && (
            <View style={styles.deleteContainer}>
            <IconButton icon="trash" 
            color={GlobalStyles.colors.error500} 
            size={36} 
            onPress={deleteExpenseHandler}
            /></View>
            )}
        </View>
    )
}

export default ManageExpenses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})