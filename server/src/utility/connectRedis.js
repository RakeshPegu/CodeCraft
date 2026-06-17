import { createClient } from 'redis'

const client = createClient({
  username: 'default',
  password: process.env.REDIS_PASS,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
})

client.on('error', (err) => {
  console.error('Redis Client Error:', err)
})

// Connect without blocking module import. Retry on failure.
async function connectWithRetry(retryDelay = 5000) {
  try {
    await client.connect()
    console.log('Redis connected')
  } catch (err) {
    console.error('Redis connection failed, retrying in', retryDelay, 'ms', err)
    setTimeout(() => connectWithRetry(Math.min(retryDelay * 2, 60000)), retryDelay)
  }
}

connectWithRetry()

export default client
