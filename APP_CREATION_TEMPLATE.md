# Mini App Creation Template

Follow these exact steps to create new mini applications that follow the established patterns.

## Step-by-Step Guide

### 1. Create App Directory Structure
```
src/apps/[AppName]/
├── [AppName].jsx     # Main component
└── utils/
    └── api.js        # API functions with TODO comments
```

### 2. Component Structure Template
Your main component should follow this pattern:
- Import `useState` from React
- Import API functions from `./utils/api`
- Use `useState` for form inputs and data
- Create async functions that call API methods
- Use hardcoded HTML for initial display (no `.map()`)
- Include form with controlled inputs
- Add basic inline styling

### 3. API Functions Template
Create `utils/api.js` with:
- Basic function exports with async/await
- Only TODO comments - no actual implementation
- Console.log for testing
- Functions for: get, add, delete operations

### 4. Styling Approach
- Use inline styles for components
- Keep styling minimal and functional
- Focus on learning React concepts, not CSS

### 5. Update Main App
- Import your new component in `src/App.jsx`
- Replace the current component render
- Test that it loads without errors

## Example App Ideas

### Todo App
- Add todos with title and description
- Display hardcoded todo items
- API functions: getTodos, addTodo, deleteTodo

### Weather App
- Input for city name
- Display hardcoded weather data
- API functions: getWeather, getForecast

### Contact Book
- Add contacts with name, email, phone
- Display hardcoded contact list
- API functions: getContacts, addContact, deleteContact

### Shopping List
- Add items with name and quantity
- Display hardcoded shopping items
- API functions: getItems, addItem, deleteItem

### Notes App
- Add notes with title and content
- Display hardcoded note cards
- API functions: getNotes, addNote, deleteNote

### Expense Tracker
- Add expenses with amount, category, description
- Display hardcoded expense list
- API functions: getExpenses, addExpense, deleteExpense

## File Templates

### Component Template
```
Key elements to include:
- useState for form data
- useState for app data (initially with sample data)
- Async function that calls API
- Form with controlled inputs
- Hardcoded display elements (2-3 sample items)
- Basic validation before API call
```

### API Template
```
Key elements to include:
- Export async functions
- TODO comments for implementation
- Console.log for testing
- No actual fetch/axios code
- Simple function signatures
```

## Learning Progression

1. **Start Simple**: Hardcoded HTML, basic state management
2. **Add Interactivity**: Form handling, state updates
3. **API Integration**: Implement actual API calls
4. **Dynamic Rendering**: Replace hardcoded HTML with `.map()`
5. **Backend Creation**: Build Express server
6. **Full Integration**: Connect frontend to backend

## Important Guidelines

- **No complex state management** (Redux, Zustand, etc.)
- **No external UI libraries** (Material-UI, Bootstrap, etc.)
- **Focus on core React concepts** (useState, useEffect, async/await)
- **Keep components in single files** initially
- **Use functional components only**
- **Minimal dependencies** - prefer vanilla JavaScript

## Folder Naming Convention

- Use PascalCase for directory names: `TodoApp`, `WeatherApp`
- Component files should match directory names: `TodoApp.jsx`
- Keep utils folder structure consistent across all apps

This template ensures consistency across all mini applications and provides a clear learning path for students.