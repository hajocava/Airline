import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Router } from "./Router"

export const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
