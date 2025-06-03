import fs from 'fs';

/**
 * Windows-compatible cleanup function for temporary directories
 */
export async function cleanupTempDir(dir: string, originalDir: string, retries = 3): Promise<void> {
	for (let i = 0; i < retries; i++) {
		try {
			// Change back to original directory to release any locks
			process.chdir(originalDir);

			// Add small delay for Windows file system
			await new Promise((resolve) => setTimeout(resolve, 100));

			fs.rmSync(dir, { recursive: true, force: true });
			return;
		} catch (error) {
			if (i === retries - 1) {
				console.warn(`Failed to cleanup temp directory after ${retries} attempts:`, error);
			} else {
				// Wait before retry
				await new Promise((resolve) => setTimeout(resolve, 200 * (i + 1)));
			}
		}
	}
}
