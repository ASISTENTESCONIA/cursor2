// Generate and display 3 test questions for Guardia Civil (Basic Scale)

function generateGuardiaCivilTests() {
  const testQuestions = [
    {
      question: "¿Cuál es la naturaleza jurídica de la Guardia Civil según la Ley Orgánica 2/1986?",
      options: [
        "Instituto armado de naturaleza civil",
        "Instituto armado de naturaleza militar",
        "Cuerpo de seguridad mixto",
        "Organismo autónomo del Estado"
      ],
      correctAnswer: "Instituto armado de naturaleza militar",
      explanation: "Según el artículo 12 de la LO 2/1986, la Guardia Civil es un instituto armado de naturaleza militar que depende del Ministerio del Interior en el desempeño de las funciones de seguridad ciudadana y del Ministerio de Defensa en el cumplimiento de las misiones de carácter militar."
    },
    {
      question: "¿Cuáles son las competencias principales de la Guardia Civil en materia de seguridad ciudadana?",
      options: [
        "Solo tráfico y carreteras",
        "Seguridad ciudadana, orden público, investigación criminal y tráfico",
        "Únicamente funciones militares",
        "Control de fronteras exclusivamente"
      ],
      correctAnswer: "Seguridad ciudadana, orden público, investigación criminal y tráfico",
      explanation: "La Guardia Civil tiene competencias en seguridad ciudadana, mantenimiento del orden público, investigación de delitos, policía judicial, tráfico, medio ambiente, y otras funciones establecidas en la normativa vigente."
    },
    {
      question: "¿En qué ámbito territorial ejerce preferentemente sus funciones la Guardia Civil?",
      options: [
        "Exclusivamente en capitales de provincia",
        "Todo el territorio nacional sin distinción",
        "Medio rural y núcleos urbanos que carezcan de policía municipal",
        "Solo en comunidades autónomas sin policía autonómica"
      ],
      correctAnswer: "Medio rural y núcleos urbanos que carezcan de policía municipal",
      explanation: "Según el artículo 11.2 de la LO 2/1986, la Guardia Civil ejerce sus funciones preferentemente en el medio rural, aunque puede actuar en todo el territorio nacional. En núcleos urbanos actúa principalmente cuando carecen de policía municipal propia."
    }
  ];

  return testQuestions;
}

// Generate and display the test questions
console.log('📝 GUARDIA CIVIL (ESCALA BÁSICA) - TEST QUESTIONS');
console.log('==================================================\n');

const tests = generateGuardiaCivilTests();

tests.forEach((test, index) => {
  console.log(`PREGUNTA ${index + 1}:`);
  console.log(`${test.question}\n`);
  
  console.log('OPCIONES:');
  test.options.forEach((option, optIndex) => {
    const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
    console.log(`${letter}) ${option}`);
  });
  
  console.log(`\nRESPUESTA CORRECTA: ${test.correctAnswer}`);
  console.log(`EXPLICACIÓN: ${test.explanation}`);
  console.log('\n' + '='.repeat(50) + '\n');
});

console.log('✅ 3 test questions generated successfully for Guardia Civil (Basic Scale)');