import { View, Text, FlatList, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesLIst"
import { GlobalStyles } from "../../contances/styles"

const DUMMY_EXPENSES = [


    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59,
        date: new Date('2021-4-01'),
    },

    {
        id: 'e2',
        description: 'Fruits',
        amount: 59,
        date: new Date('2021-12-05'),
    },

    {
        id: 'e3',
        description: 'Drive',
        amount: 59,
        date: new Date('2021-12-01'),
    }, 

        {
        id: 'e4',
        description: 'Trip',
        amount: 59.99,
        date: new Date('2021-12-01'),
    }, 
    {
        id: 'e5',
        description: 'Vidéos games',
        amount: 2344,
        date: new Date('2022-07-08'),
    }, 
    {
        id: 'e6',
        description: 'Vidéos games',
        amount: 559,
        date: new Date('2021-12-04'),
    }, 

    {
        id: 'e7',
        description: 'A pair of shoes',
        amount: 67,
        date: new Date('2021-12-07'),
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
        paddingHorizontal: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        color: 'white'

    }
})