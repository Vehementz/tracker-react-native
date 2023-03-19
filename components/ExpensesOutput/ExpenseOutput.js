import { View, Text, FlatList, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesLIst"
import { GlobalStyles } from "../../contances/styles"

const DUMMY_EXPENSES = [


    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-01'),
    },

    {
        id: 'e2',
        description: 'Fruits',
        amount: 59.99,
        date: new Date('2021-12-01'),
    },

    {
        id: 'e3',
        description: 'Vidéos games',
        amount: 59.99,
        date: new Date('2021-12-01'),
    }, 

        {
        id: 'e4',
        description: 'Vidéos games',
        amount: 59.99,
        date: new Date('2021-12-01'),
    }, 
    {
        id: 'e5',
        description: 'Vidéos games',
        amount: 59.99,
        date: new Date('2021-12-01'),
    }, 
    {
        id: 'e6',
        description: 'Vidéos games',
        amount: 1009.99,
        date: new Date('2021-12-01'),
    }, 

    {
        id: 'e7',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-01'),
    },

]


function ExpensesOutput({ expenses, expensesPeriode }) {
    return <View style={styles.container} >
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriode} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
            {/* List of expenses */}
    </View>
}

export default ExpensesOutput 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        color: 'white'

    }
})