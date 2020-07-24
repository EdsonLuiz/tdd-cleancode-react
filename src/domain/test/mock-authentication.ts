import faker from 'faker'
import { AuthenticationParams } from '@/domain/usecases/authentications'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})