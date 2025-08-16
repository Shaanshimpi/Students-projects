# Student Learning App Creation Template

## Instructions for AI
Create a React app for student learning with these exact specifications:

### Core Requirements
- **Bare minimum code** - Only essential functionality, no fancy features
- **Educational focus** - Students must implement core logic themselves
- **Indian context** - Use Indian examples, names, places, or themes where relevant
- **Simple structure** - Easy to understand file organization

### App Structure Template
```
src/
├── App.jsx                    # Main app component  
├── components/
│   ├── [ItemCard].jsx        # Display component for single item
│   └── [AddItemForm].jsx     # Form component for adding items
└── utils/
    └── api.js                # Empty file with TODO comments only
```

### What to Include
1. **Static demo data** - Show one hardcoded item using plain HTML (not dynamic mapping)
2. **Empty API functions** - Only TODO comments, no actual fetch code
3. **Form with basic validation** - Simple alert() for errors
4. **Loading states** - Basic loading/error handling structure
5. **Essential state management** - useState and useEffect only
6. **Simple styling** - Regular CSS only, no Tailwind or CSS frameworks
7. **Student TODO areas** - Clear comments where they need to code

### What NOT to Include
- No complex error handling beyond basic try/catch
- No advanced features (search, filters, pagination, etc.)
- No fancy animations or icons (basic icons ok)
- No image handling or file uploads
- No routing or multiple pages
- No localStorage or persistence
- No editing/updating functionality (unless specifically requested)
- No detailed validation beyond required fields

### Student Implementation Tasks
Students should have to implement:
1. **Write fetch functions** - GET and POST API calls from scratch
2. **Replace static HTML** - Convert hardcoded item to dynamic mapping
3. **Connect API calls** - Import and use their functions in components
4. **Handle responses** - Update state with API data

### API Integration Pattern
- **Express backend required** - Students build backend with 2 routes
- **Mock data in comments** - Show expected data structure
- **Clear TODO markers** - Exactly where to add fetch logic
- **Port configuration** - Default to localhost:3001/api

### Code Style Guidelines
- **Simple variable names** - Use descriptive but short names
- **Minimal comments** - Only where students need to add code
- **Human-like comments** - Casual tone, not robotic AI language
- **One responsibility per component** - Clear separation of concerns
- **Regular CSS only** - Use plain CSS styles, no Tailwind or frameworks
- **Inline styles or CSS modules** - Keep styling simple and contained

### File Content Template

**App.jsx should have:**
- Static hardcoded item display (not mapped)
- Empty useEffect with TODO comment
- Basic error/loading states
- Add button that shows form

**ItemCard.jsx should have:**
- Simple props display
- Basic CSS styling with style objects or className
- No complex features

**AddItemForm.jsx should have:**
- Controlled inputs
- Basic validation (required fields only)
- Loading state during submission
- TODO comment where API call goes

**api.js should have:**
- Empty functions with detailed TODO comments
- Expected data structure in comments
- No actual fetch code

**Guide should include:**
- Backend requirements (Express routes needed)
- 5 clear steps to implement
- What students need to replace
- Expected data structure
- No code examples, just instructions

### Example Prompts for Different Apps

**Todo App:**
"Create a todo app where students fetch todos and add new ones. Use Indian task examples like 'Buy vegetables from market', 'Complete math homework'."

**Student Management:**
"Create a student management app to display student info and add new students. Use Indian names and subjects."

**Book Library:**
"Create a book library app to show books and add new ones. Use popular Indian books and authors."

**Expense Tracker:**
"Create an expense tracker to show expenses and add new ones. Use Indian currency (₹) and common Indian expenses."

**Blog Posts:**
"Create a simple blog app to display posts and add new ones. Use topics relevant to Indian students."

### Template Response Format

Always create these 4 artifacts:
1. **components/[ItemCard].jsx** - Display component
2. **components/[AddItemForm].jsx** - Form component  
3. **utils/api.js** - Empty API functions
4. **App.jsx** - Main component with static display
5. **Implementation Guide** - Step-by-step student tasks

### Quality Checklist
- [ ] App shows static demo with one hardcoded item
- [ ] Students must write all fetch functions themselves
- [ ] Students must implement dynamic mapping themselves
- [ ] Clear TODO comments show exactly where to code
- [ ] Indian context used where appropriate
- [ ] Minimal CSS styling, maximum learning
- [ ] Guide has 5 clear implementation steps
- [ ] No advanced features that distract from core learning

Use this template to create focused learning apps that teach React + API integration without overwhelming students with unnecessary complexity.