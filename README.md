# React + TypeScript + Vite
- Features: Login success then view Stock list. (call from the Stocks API endpoint)
- After User login, store TOKEN, isLoggedIn flag to Context State object. Use TOKEN to retrieve Stocks Info.
# Technologies
- TypeScript
- type, inteface, destructuring
- spread function (...state)
- Context API (hooks)
- Router, models, services, contexts, components
- Axios
- format date with 'data-fns' library.
# State management with Context API
- 0. createContext<>() to store State and Dispatch<Action>
- 1. State is object to store {TOKEN and isLoggedIn}
- 2. Action has TYPE like LOGIN/LOGOUT with payload along with. eg: login has token.
- 3. Reducer is to change Current State based on Action.TYPE (using ...spread function)
- 4. Provider brings 'children' and useReducer(Reducer, initState). Return Context.Provider with value of {state, dispatch} and {children}
- 5. use Provider to cover all children on App.tsx
- 6. Components like LoginForm, StockList useEffect(), useState(), useContext() {state,dispatch} , useNavigate()... and handle Events, call Service class and Dispatch based on action/event
- 7. Service is to call API endpoints by using Axios.