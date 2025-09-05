import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Details } from "./pages/Details/Details";
import { TVShows } from "./pages/TVShows/TVShows";
import { PageSuccessMessageProvider } from "./contexts/PageSuccessMessageContext";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";
import { SideNavigationProvider } from "./contexts/SideNavigationContext";

// Create a client
export const queryClient = new QueryClient();

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <SideNavigation />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/details/:mediaType/:mediaId" element={<Details />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <PageSuccessMessageProvider>
        <SideNavigationProvider>
          <RouterProvider router={router} />
        </SideNavigationProvider>
      </PageSuccessMessageProvider>
    </QueryClientProvider>
  );
};

export default App;
