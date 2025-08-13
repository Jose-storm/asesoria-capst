import AppRouter from "@/routes/AppRouter";
import "./App.css";
import Mantenimiento from "@/pages/support/Mantenimiento";

const EN_MANTENIMIENTO = import.meta.env.VITE_MANTENIMIENTO === "true";

const App = () => {
    if (EN_MANTENIMIENTO) {
        return <Mantenimiento />;
    }

    return <AppRouter />;
};

export default App;

