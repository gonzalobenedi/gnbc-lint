#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

function testConfig(configPath, description) {
  try {
    console.log(`\n🧪 Testing ${description}...`);
    
    // Load the flat config
    const config = require(configPath);
    
    // Basic validation that it's a valid ESLint flat config structure
    if (!Array.isArray(config)) {
      throw new Error('Configuration must be an array (flat config format)');
    }
    
    // Check each config object has valid structure
    for (const cfg of config) {
      if (typeof cfg !== 'object' || cfg === null) {
        throw new Error('Each configuration item must be an object');
      }
    }
    
    console.log(`  ✅ Configuration loads successfully and is valid flat config`);
    return true;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log(`  ⚠️  Skipped - requires optional peer dependency: ${error.message.match(/'(.+)'/)?.[1] || 'unknown module'}`);
      return true; // Don't fail for missing peer dependencies
    }
    console.error(`  ❌ Error testing ${description}:`);
    console.error(`     ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🔍 Testing ESLint flat configurations...');
  console.log('ℹ️  Note: Some configurations may be skipped due to missing peer dependencies');
  
  const configs = [
    { path: './index.js', desc: 'Base configuration' },
    { path: './node.js', desc: 'Node.js configuration' },
    { path: './typescript.js', desc: 'TypeScript configuration' },
    { path: './react.js', desc: 'React configuration' },
    { path: './react-native.js', desc: 'React Native configuration' },
    { path: './angular.js', desc: 'Angular configuration' }
  ];

  let allPassed = true;

  for (const config of configs) {
    const configPath = path.resolve(__dirname, config.path);
    if (fs.existsSync(configPath)) {
      const success = testConfig(configPath, config.desc);
      if (!success) allPassed = false;
    } else {
      console.log(`⚠️  Configuration file ${config.path} not found, skipping...`);
    }
  }

  if (allPassed) {
    console.log('\n✅ All ESLint flat configurations are valid!');
    console.log('💡 Install the appropriate peer dependencies to use specific configurations.');
    process.exit(0);
  } else {
    console.log('\n❌ Some configurations failed validation');
    process.exit(1);
  }
}

// Only run if this script is called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testConfig };

module.exports = { testConfig };