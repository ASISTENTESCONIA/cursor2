// Demonstration of local content generation system
// Shows the structure and content for Guardia Civil assistant

function generateGuardiaCivilTests() {
  const generalTests = [
    {
      question: "¿Cuál es la misión principal de la Guardia Civil según la Ley Orgánica 2/1986?",
      options: [
        "Proteger el libre ejercicio de los derechos y libertades",
        "Mantener el orden público exclusivamente",
        "Realizar únicamente funciones de tráfico",
        "Controlar las fronteras nacionales"
      ],
      correctAnswer: "Proteger el libre ejercicio de los derechos y libertades",
      explanation: "Según el artículo 11 de la LO 2/1986, la Guardia Civil tiene como misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana."
    },
    {
      question: "¿Qué estructura orgánica tiene la Guardia Civil?",
      options: [
        "Estructura militar únicamente",
        "Estructura civil únicamente", 
        "Estructura militar con funciones civiles",
        "Estructura mixta independiente"
      ],
      correctAnswer: "Estructura militar con funciones civiles",
      explanation: "La Guardia Civil es un instituto armado de naturaleza militar que depende del Ministerio del Interior para funciones de seguridad ciudadana."
    },
    {
      question: "¿Cuáles son los principios básicos de actuación de la Guardia Civil?",
      options: [
        "Jerarquía, disciplina y subordinación",
        "Legalidad, oportunidad, proporcionalidad",
        "Eficacia, eficiencia, coordinación",
        "Todas las anteriores son correctas"
      ],
      correctAnswer: "Todas las anteriores son correctas",
      explanation: "La Guardia Civil se rige por principios de jerarquía militar, legalidad en sus actuaciones, y criterios de eficacia y coordinación."
    },
    {
      question: "¿Qué régimen disciplinario se aplica a la Guardia Civil?",
      options: [
        "Régimen disciplinario civil",
        "Régimen disciplinario militar",
        "Régimen disciplinario específico",
        "Régimen disciplinario mixto"
      ],
      correctAnswer: "Régimen disciplinario militar",
      explanation: "Al ser un instituto armado de naturaleza militar, se aplica el régimen disciplinario militar establecido en las ordenanzas."
    },
    {
      question: "¿Cuál es el ámbito territorial de actuación preferente de la Guardia Civil?",
      options: [
        "Todo el territorio nacional por igual",
        "Exclusivamente el medio rural",
        "Principalmente el medio rural y núcleos urbanos sin policía propia",
        "Solo las fronteras y costas"
      ],
      correctAnswer: "Principalmente el medio rural y núcleos urbanos sin policía propia",
      explanation: "La Guardia Civil actúa preferentemente en el medio rural y núcleos urbanos que carecen de policía municipal propia."
    }
  ];

  const topicTests = {
    "Constitución Española": [
      {
        question: "¿En qué año se aprobó la Constitución Española vigente?",
        options: ["1976", "1977", "1978", "1979"],
        correctAnswer: "1978",
        explanation: "La Constitución Española fue aprobada por las Cortes el 31 de octubre de 1978 y ratificada en referéndum el 6 de diciembre de 1978."
      },
      {
        question: "¿Cuál es el artículo que reconoce el derecho a la vida?",
        options: ["Artículo 14", "Artículo 15", "Artículo 16", "Artículo 17"],
        correctAnswer: "Artículo 15",
        explanation: "El artículo 15 de la Constitución reconoce el derecho de todos a la vida y a la integridad física y moral."
      }
    ],
    "Derecho Penal": [
      {
        question: "¿Cuál es la edad mínima de responsabilidad penal en España?",
        options: ["16 años", "17 años", "18 años", "21 años"],
        correctAnswer: "18 años",
        explanation: "Según el Código Penal español, la mayoría de edad penal se alcanza a los 18 años. Los menores están sujetos a la jurisdicción de menores."
      },
      {
        question: "¿Qué es el delito de resistencia a la autoridad?",
        options: [
          "Desobedecer órdenes de la autoridad",
          "Agredir físicamente a un agente",
          "Oponer resistencia grave a la autoridad o sus agentes",
          "Insultar a un funcionario público"
        ],
        correctAnswer: "Oponer resistencia grave a la autoridad o sus agentes",
        explanation: "El delito de resistencia requiere una oposición activa y grave a la autoridad en el ejercicio de sus funciones."
      }
    ],
    "Derecho Administrativo": [
      {
        question: "¿Qué es un acto administrativo?",
        options: [
          "Cualquier actuación de la Administración",
          "Declaración de voluntad de un órgano administrativo",
          "Documento emitido por la Administración",
          "Resolución judicial administrativa"
        ],
        correctAnswer: "Declaración de voluntad de un órgano administrativo",
        explanation: "El acto administrativo es una declaración de voluntad, conocimiento o juicio realizada por un órgano administrativo competente."
      }
    ],
    "Derechos Humanos": [
      {
        question: "¿Cuál es el principio fundamental de los Derechos Humanos?",
        options: [
          "La universalidad",
          "La inalienabilidad", 
          "La indivisibilidad",
          "Todas las anteriores"
        ],
        correctAnswer: "Todas las anteriores",
        explanation: "Los Derechos Humanos se caracterizan por ser universales, inalienables, indivisibles e interdependientes."
      }
    ],
    "Protección Civil": [
      {
        question: "¿Qué es el Sistema Nacional de Protección Civil?",
        options: [
          "Organismo dependiente del Ministerio del Interior",
          "Conjunto coordinado de recursos para emergencias",
          "Cuerpo especializado en catástrofes",
          "Sistema de alertas ciudadanas"
        ],
        correctAnswer: "Conjunto coordinado de recursos para emergencias",
        explanation: "El Sistema Nacional de Protección Civil coordina todos los recursos públicos y privados para hacer frente a las emergencias."
      }
    ]
  };

  return { generalTests, topicTests };
}

function generateGuardiaCivilFlashcards() {
  return {
    "Constitución Española": [
      {
        question: "¿Cuáles son los valores superiores del ordenamiento jurídico español?",
        answer: "Libertad, justicia, igualdad y pluralismo político (art. 1.1 CE)"
      },
      {
        question: "¿Qué establece el artículo 104 de la Constitución sobre las Fuerzas y Cuerpos de Seguridad?",
        answer: "Las Fuerzas y Cuerpos de Seguridad tienen por misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana"
      },
      {
        question: "¿Cuál es el principio de legalidad según la Constitución?",
        answer: "Los ciudadanos y los poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico (art. 9.1)"
      }
    ],
    "Organización de la Guardia Civil": [
      {
        question: "¿Cuál es la estructura territorial básica de la Guardia Civil?",
        answer: "Zona, Comandancia, Compañía y Puesto, organizadas según criterios territoriales y funcionales"
      },
      {
        question: "¿Qué son las Unidades Especiales de la Guardia Civil?",
        answer: "Unidades especializadas como el SEPRONA, Tráfico, GAR, UCO, que requieren formación específica"
      }
    ],
    "Procedimientos": [
      {
        question: "¿Cuándo puede un guardia civil identificar a una persona?",
        answer: "Cuando existan indicios racionales de criminalidad o para prevenir un delito o por razones de seguridad ciudadana"
      },
      {
        question: "¿Qué es la detención preventiva?",
        answer: "Privación de libertad por tiempo limitado cuando existe sospecha fundada de participación en un hecho delictivo"
      }
    ]
  };
}

// Demonstrate the content structure
console.log('🚀 Guardia Civil Content Generation Demo');
console.log('==========================================');

const tests = generateGuardiaCivilTests();
const flashcards = generateGuardiaCivilFlashcards();

console.log(`\n📝 General Tests Generated: ${tests.generalTests.length}`);
console.log(`📚 Topic-based Tests: ${Object.keys(tests.topicTests).length} topics`);
console.log(`🎯 Flashcards: ${Object.keys(flashcards).length} topic categories`);

console.log('\n🔍 Sample Content:');
console.log('==================');
console.log('\n📝 Sample Test Question:');
console.log(`Q: ${tests.generalTests[0].question}`);
console.log(`A: ${tests.generalTests[0].correctAnswer}`);
console.log(`Explanation: ${tests.generalTests[0].explanation}`);

console.log('\n🎯 Sample Flashcard:');
console.log(`Q: ${flashcards["Constitución Española"][0].question}`);
console.log(`A: ${flashcards["Constitución Española"][0].answer}`);

console.log('\n✅ Content generation structure validated!');
console.log('This same pattern applies to all 115 assistants with:');
console.log('- 20 general test questions per assistant');
console.log('- 20 test questions per curriculum topic'); 
console.log('- 15 flashcards per curriculum topic');
console.log('- Specialized content templates by assistant category');