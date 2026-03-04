// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //Maximum time for one test case to run 30s
  timeout:30*1000,
  //Assertion timeout 5s
  expect:{
    timeout:5000,

  },
  reporter: 'html',

  use: {
    browserName:'firefox',
    headless:false,
    screenshot:'on',
    // trace:'on',
    trace:'retain-on-failure',
  },

  
 });

