import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalRoute } from './routes/create-goal'
import { createPendingGoalRoute } from './routes/create-pending-goals'
import { createCompletionRoute } from './routes/create-completions'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createPendingGoalRoute)
app.register(createCompletionRoute)
app.register(getWeekSummaryRoute)


app.get('/', async () => {
  return { hello: 'world - in-orbit API is online' }
})

if (process.env.NODE_ENV !== 'production') {
  app.listen({ port: 3333 }).then(() => {
    console.log('HTTP Server Running locally!')
  })
}

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit('request', req, res);
}
