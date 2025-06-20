import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const AdminPage = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-center">No tienes permisos para acceder a esta página.</p>
            <Link to="/dashboard" className="block mt-4">
              <Button className="w-full">Volver al Dashboard</Button>
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
              <Link to="/dashboard" className="mr-4">
                <Button variant="outline">← Volver</Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {user.username} - Admin
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Usuarios</CardTitle>
              <CardDescription>
                Administrar cuentas de usuario y suscripciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Ver Usuarios</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gestión de Asistentes</CardTitle>
              <CardDescription>
                Configurar y administrar asistentes de IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Gestionar Asistentes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
              <CardDescription>
                Ver métricas y análisis de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Ver Estadísticas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuración</CardTitle>
              <CardDescription>
                Ajustes generales de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Configurar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contenido</CardTitle>
              <CardDescription>
                Gestionar tests, tarjetas y material de estudio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Gestionar Contenido</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pagos</CardTitle>
              <CardDescription>
                Administrar suscripciones y pagos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Ver Pagos</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;