// Test script to trigger and verify local content generation
const { localContentGenerator } = require('./server/local-content-generator.ts');

async function testContentGeneration() {
  console.log('🚀 Starting local content generation test...');
  
  try {
    // Generate all content
    await localContentGenerator.generateAllContent();
    
    // Get the generated data
    const localData = localContentGenerator.getLocalData();
    const assistantNames = Object.keys(localData);
    
    console.log(`\n✅ Content generation completed successfully!`);
    console.log(`📊 Generated content for ${assistantNames.length} assistants`);
    
    // Test specific assistant content
    if (assistantNames.length > 0) {
      const firstAssistant = assistantNames[0];
      console.log(`\n🔍 Testing content for: ${firstAssistant}`);
      
      const content = localContentGenerator.getAssistantContent(firstAssistant);
      
      if (content) {
        console.log(`  - General tests: ${content.tests.general.length}`);
        console.log(`  - Topics with tests: ${Object.keys(content.tests.byTopic).length}`);
        console.log(`  - Topics with flashcards: ${Object.keys(content.flashcards).length}`);
        
        // Show sample content
        if (content.tests.general.length > 0) {
          console.log(`\n📝 Sample test question:`);
          console.log(`  Q: ${content.tests.general[0].question}`);
          console.log(`  A: ${content.tests.general[0].correctAnswer}`);
        }
        
        const topicNames = Object.keys(content.flashcards);
        if (topicNames.length > 0) {
          const firstTopic = topicNames[0];
          const flashcards = content.flashcards[firstTopic];
          if (flashcards.length > 0) {
            console.log(`\n🎯 Sample flashcard (${firstTopic}):`);
            console.log(`  Q: ${flashcards[0].question}`);
            console.log(`  A: ${flashcards[0].answer}`);
          }
        }
      }
    }
    
    console.log('\n🎉 Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testContentGeneration();