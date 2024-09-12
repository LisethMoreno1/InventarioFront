import { Home } from "lucide-react";
import { FaUser } from 'react-icons/fa';
import { Dashboard } from "../pages/Dashboard";
import { Services } from "../pages/Services";
import { RouteConfig } from "./RouteType";
import ProtectedRoute from "../componets/Auth/ProtectedRoute";
import { Layout } from "../componets/Layout/Layout";

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    element: (
      <ProtectedRoute >
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    ),
    icon: Home,
    children: [
      {
        path: 'servicios',
        label: 'Servicios',
        element: (
          <ProtectedRoute>
            <Layout>
              <Services />
            </Layout>
          </ProtectedRoute>
        ),
        icon: FaUser,
        children: [
          {
            path: 'detalle',
            label: 'Detalle',
            element: (
              <ProtectedRoute>
                <Layout>
                  <Services />
                </Layout>
              </ProtectedRoute>
            ),
            icon: FaUser,
          },
        ],
      },
    ],
  },
];
