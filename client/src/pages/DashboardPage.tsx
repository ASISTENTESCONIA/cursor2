import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-center">Debes iniciar sesión para acceder al dashboard.</p>
            <Link to="/login" className="block mt-4">
              <Button className="w-full">Iniciar Sesión</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Bienvenido, {user.username}
                {user.isFounder && <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Founder</span>}
              </span>
              <Button variant="outline" onClick={logout}>
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mis Asistentes de IA
          </h2>
          <p className="text-gray-600">
            Accede a tus asistentes especializados para la preparación de oposiciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Guardia Civil (Escala Básica)</CardTitle>
              <CardDescription>
                Asistente especializado en oposiciones de Guardia Civil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Precio mensual:</span>
                <span className="font-semibold">
                  {user.isFounder ? '4€' : '16€'}
                </span>
              </div>
              <Link to="/assistant/guardia-civil">
                <Button className="w-full">Acceder</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Policía Nacional</CardTitle>
              <CardDescription>
                Preparación específica para Policía Nacional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Precio mensual:</span>
                <span className="font-semibold">
                  {user.isFounder ? '4€' : '16€'}
                </span>
              </div>
              <Link to="/assistant/policia-nacional">
                <Button className="w-full">Acceder</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enfermería</CardTitle>
              <CardDescription>
                Asistente para oposiciones de enfermería
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Precio mensual:</span>
                <span className="font-semibold">
                  {user.isFounder ? '4€' : '16€'}
                </span>
              </div>
              <Link to="/assistant/enfermeria">
                <Button className="w-full">Acceder</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {user.role === 'admin' && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Panel de Administración</CardTitle>
                <CardDescription>
                  Acceso a funciones administrativas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/admin">
                  <Button>Ir al Panel de Admin</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;