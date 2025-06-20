import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Oposiciones</h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Iniciar Sesión</Button>
              </Link>
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plataforma de Estudio para Oposiciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepárate para tus oposiciones con nuestros asistentes de IA especializados en diferentes áreas del sector público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Fuerzas de Seguridad</CardTitle>
              <CardDescription>
                Guardia Civil, Policía Nacional, Policía Local
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Asistentes especializados en las oposiciones de seguridad pública.
              </p>
              <Button className="w-full">Ver Asistentes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sanidad</CardTitle>
              <CardDescription>
                Enfermería, Celador, Auxiliar de Enfermería
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Preparación específica para oposiciones del sector sanitario.
              </p>
              <Button className="w-full">Ver Asistentes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Administración</CardTitle>
              <CardDescription>
                Auxiliar Administrativo, Administrativo, Técnico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Asistentes para oposiciones de la administración pública.
              </p>
              <Button className="w-full">Ver Asistentes</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/login">
            <Button size="lg" className="px-8 py-3">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;