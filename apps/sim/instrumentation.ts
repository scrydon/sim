export async function register() {
  console.log('[Main Instrumentation] register() called, environment:', {
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NODE_ENV: process.env.NODE_ENV,
  })
}
