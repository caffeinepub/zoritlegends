import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Home from './pages/Home';
import Team from './pages/Team';
import { AuthProvider } from './contexts/AuthContext';

const rootRoute = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  component: Team,
});

const routeTree = rootRoute.addChildren([homeRoute, teamRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
