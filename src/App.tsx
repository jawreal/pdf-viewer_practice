import Button from "./components/Button";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleTheme = () => {
    setDarkMode((prevTheme: boolean) => !prevTheme)
  }
  return (
    <div className="min-h-screen dark:bg-slate-950 flex justify-center items-center">
       <div className="w-full p-2 max-w-80 rounded-md border border-slate-300 dark:border-slate-800 dark:bg-slate-900 flex flex-col gap-y-2">
          <Button className="rounded-md p-2 bg-slate-950 w-full text-slate-200 dark:text-slate-950 dark:bg-slate-200" onClick={handleTheme}>Toggle Theme</Button>
        </div>
    </div>
  )
};

export default App;