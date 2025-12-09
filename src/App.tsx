
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieBanner } from "@/components/CookieBanner";
import Index from "./pages/Index";
import Calculator from "./pages/Calculator";
import Privacy from "./pages/Privacy";
import Consent from "./pages/Consent";
import NotFound from "./pages/NotFound";
import Signage from "./pages/services/Signage";
import Interior from "./pages/services/Interior";
import Transport from "./pages/services/Transport";
import Banners from "./pages/services/Banners";
import Design from "./pages/services/Design";
import Installation from "./pages/services/Installation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/signage" element={<Signage />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/design" element={<Design />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/consent" element={<Consent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;