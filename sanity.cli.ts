/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli';

// Ensure environment variables are defined properly
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'default_project_id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'default_dataset';

if (!projectId || !dataset) {
  console.error(
    'Environment variables NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are required.'
  );
  process.exit(1); // Exit with error if variables are missing
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
