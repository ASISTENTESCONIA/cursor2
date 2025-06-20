import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';

const AssistantDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const assistantData = {
    'guardia-civil': {
      name: 'Guardia Civil (Escala Básica)',
      description: 'Asistente especializado en la preparación de oposiciones para Guardia Civil',
      topics: ['Constitución Española', 'Derecho Penal', 'Derecho Administrativo', 'Organización de la Guardia Civil']
    },
    'policia-nacional': {
      name: 'Policía Nacional',
      description: 'Preparación completa para las oposiciones de Policía Nacional',
      topics: ['Constitución Española', 'Derecho Penal', 'Derecho Procesal Penal', 'Organización Policial']
    },
    'enfermeria': {
      name: 'Enfermería',
      description: 'Asistente para oposiciones del sector sanitario - Enfermería',
      topics: ['Anatomía', 'Fisiología', 'Farmacología', 'Cuidados de Enfermería']
    }
  };

  const assistant = assistantData[id as keyof typeof assistantData];

  if (!assistant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-center">Asistente no encontrado.</p>
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
              <h1 className="text-2xl font-bold text-gray-900">{assistant.name}</h1>
            </div>
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {user.username}
                  {user.isFounder && <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Founder</span>}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{assistant.name}</h2>
          <p className="text-gray-600">{assistant.description}</p>
        </div>

        <Tabs defaultValue="syllabus" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="syllabus">Temario</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="flashcards">Tarjetas</TabsTrigger>
            <TabsTrigger value="chat">Chat IA</TabsTrigger>
          </TabsList>

          <TabsContent value="syllabus" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Temario del Curso</CardTitle>
                <CardDescription>
                  Contenido estructurado para tu preparación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {assistant.topics.map((topic, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Tema {index + 1}</h3>
                      <p className="text-sm text-gray-600">{topic}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tests de Práctica</CardTitle>
                <CardDescription>
                  Practica con preguntas tipo examen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accede a más de 100 preguntas de práctica organizadas por temas.
                </p>
                <Button>Comenzar Test</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flashcards" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tarjetas de Estudio</CardTitle>
                <CardDescription>
                  Repasa conceptos clave con tarjetas interactivas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sistema de repaso espaciado para optimizar tu memorización.
                </p>
                <Button>Estudiar Tarjetas</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Chat con IA</CardTitle>
                <CardDescription>
                  Resuelve dudas con tu asistente personal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">
                    Haz preguntas específicas sobre el temario y recibe respuestas personalizadas.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 px-3 py-2 border rounded-lg"
                  />
                  <Button>Enviar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AssistantDetailPage;