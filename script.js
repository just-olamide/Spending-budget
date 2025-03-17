
const budget = 100;
let expenses = 0;

const budgetDisplay = document.getElementById('budget');
const expensesDisplay = document.getElementById('expenses');
const remainingDisplay = document.getElementById('remaining');
const expenseInput = document.getElementById('expenseInput');
const submitButton = document.getElementById('submitExpense');


function updateDisplay() {
  expensesDisplay.textContent = expenses;
  remainingDisplay.textContent = (budget - expenses).toFixed(2);
}

// Event listener for the "Add Expense" button
submitButton.addEventListener('click', function() {
  const expenseAmount = parseFloat(expenseInput.value);

  // Validate input
  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    return;
  }

  expenses += expenseAmount;
  updateDisplay();
  expenseInput.value = '';  // Clear the input field
});

// Initialize the display
updateDisplay();



  
  



