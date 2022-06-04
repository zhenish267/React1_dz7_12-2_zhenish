import {Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import NewsPage from "./pages/newsPage/NewsPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path="news" element={<NewsPage/>}/>
                <Route path="main" element={<MainPage/>}/>
                <Route path="contact" element={<ContactsPage/>}/>

            </Routes>

            <Footer/>

        </div>
    );
}

export default App;
