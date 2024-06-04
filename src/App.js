import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/homePage.component.jsx';
import DogsPage from './routes/dogs/dogsPage.component.jsx';
import CatsPage from './routes/cats/catsPage.component.jsx';
import BirdsPage from './routes/birds/birdsPage.component.jsx';
import AboutUs from './routes/about-us/aboutUs.component.jsx';
import ContactUs from './routes/contact-us/contactUs.component.jsx';
import NavBar from './routes/navigation/navigation-component.jsx'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dogs" element={<DogsPage />} />
                <Route path="/cats" element={<CatsPage />} />
                <Route path="/birds" element={<BirdsPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

