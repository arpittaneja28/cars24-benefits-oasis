import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PersonalLoansPage from "./pages/PersonalLoansPage";
import CreditCardsPage from "./pages/CreditCardsPage";
import OnlineShoppingPage from "./pages/OnlineShoppingPage";
import LoginPage from "./pages/LoginPage";
import ComparisonPage from "./pages/ComparisonPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/personal-loans" element={<PersonalLoansPage />} />
            <Route path="/credit-cards" element={<CreditCardsPage />} />
            <Route path="/online-shopping" element={<OnlineShoppingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
