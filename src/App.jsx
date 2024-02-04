import React from "react";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Transactions from "./components/Transactions";
import Account from "./components/Account";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Results = React.lazy(() => import("./components/Results"));
const Home = React.lazy(() => import("./components/Home"));
const Battle = React.lazy(() => import("./components/Battle"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="flex-col justify-between">
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
              <Route path="/transactions" element={<Transactions />}>
                <Route path=":accountId" element={<Account />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
