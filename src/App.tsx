// import {NavigationMenuDemo} from '@/components/Header/Header'
// App.tsx
// import AppRouter from "./routes/AppRouter";
// import "./App.css"

// const EN_MANTENIMIENTO  = import.meta.env.VITE_MANTENIMIENTO === "true"
// const App = () => <AppRouter />;

// export default App;
import AppRouter from "./routes/AppRouter";
import "./App.css";
import Mantenimiento from "@/pages/support/Mantenimiento"; // Asegúrate de tener esta página

const EN_MANTENIMIENTO = import.meta.env.VITE_MANTENIMIENTO === "true";

const App = () => {
    if (EN_MANTENIMIENTO) {
        return <Mantenimiento />;
    }

    return <AppRouter />;
};

export default App;

