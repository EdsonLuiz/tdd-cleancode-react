import axios from 'axios'
import faker from 'faker'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  it('Should call axios with correct values', async () => {
    const rerquest = mockPostRequest()
    const sut = makeSut()
    await sut.post(rerquest)
    expect(mockedAxios.post).toHaveBeenCalledWith(rerquest.url, rerquest.body)
  })
})
