#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Checks if the application is ready for production deployment
 */

import { exec } from 'child_process';
import { access, constants } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('🔍 Verifying deployment readiness...\n');

async function checkFile(path, description) {
  try {
    await access(path, constants.F_OK);
    console.log(`✅ ${description}: ${path}`);
    return true;
  } catch {
    console.log(`❌ ${description}: ${path} (missing)`);
    return false;
  }
}

async function runCommand(command, description) {
  try {
    const { stdout, stderr } = await execAsync(command);
    console.log(`✅ ${description}`);
    return true;
  } catch (error) {
    console.log(`❌ ${description}: ${error.message}`);
    return false;
  }
}

async function main() {
  let allGood = true;

  // Check required files
  allGood &= await checkFile('package.json', 'Package configuration');
  allGood &= await checkFile('server/index.ts', 'Server entry point');
  allGood &= await checkFile('vite.config.ts', 'Build configuration');

  console.log('\n📦 Testing build process...');
  
  // Test build command
  allGood &= await runCommand('npm run build', 'Build command (npm run build)');
  
  // Check build output
  allGood &= await checkFile('dist/index.js', 'Backend build output');
  allGood &= await checkFile('dist/public/index.html', 'Frontend build output');
  allGood &= await checkFile('dist/public/assets', 'Frontend assets');

  console.log('\n⚙️ Testing production server...');
  
  // Test start command (quick check)
  try {
    const child = exec('NODE_ENV=production npm start');
    
    // Give server time to start
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test if server responds
    try {
      await execAsync('curl -f http://localhost:5000 > /dev/null');
      console.log('✅ Production server responds correctly');
    } catch {
      console.log('❌ Production server not responding');
      allGood = false;
    }
    
    // Clean up
    child.kill('SIGTERM');
  } catch (error) {
    console.log(`❌ Cannot start production server: ${error.message}`);
    allGood = false;
  }

  console.log('\n📋 Manual steps required:');
  console.log('1. Update .replit file with:');
  console.log('   [deployment]');
  console.log('   build = ["sh", "-c", "npm run build"]');
  console.log('   run = ["sh", "-c", "npm start"]');
  console.log('');
  console.log('2. Add environment variables in Replit Secrets:');
  console.log('   NODE_ENV=production');
  console.log('   SESSION_SECRET=your-secure-secret');
  console.log('');
  console.log('3. Deploy using Replit Deploy button');

  console.log(`\n${allGood ? '🎉 Application is ready for deployment!' : '⚠️  Please fix the issues above before deploying'}`);
  process.exit(allGood ? 0 : 1);
}

main().catch(console.error);