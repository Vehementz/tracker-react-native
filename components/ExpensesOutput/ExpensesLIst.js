import { FlatList, Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../../contances/styles";

function renderExpenseItem(itemData) {
    return <Text style={styles.description}>{itemData.item.description}</Text>
}

function ExpensesList({ expenses }) {
    return <FlatList 
    data={expenses} 
    renderItem={(renderExpenseItem)} 
    keyExtractor={(item) => item.id }/>;
}


export default ExpensesList;

const styles = StyleSheet.create({
    description: {
      color: 'white',
    },
   

})