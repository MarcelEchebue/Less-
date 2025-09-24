import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { AllProjects } from "./pages/AllProjects";
import { ProjectDetail } from "./pages/ProjectDetail";
import Contact from './pages/ContactPage';
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/all-projects" element={<AllProjects />} /> {/* ✅ sin onNavigate vacío */}
          <Route path="/all-projects/:category/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
