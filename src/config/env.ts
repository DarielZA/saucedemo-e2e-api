import dotenv from 'dotenv';

dotenv.config();

export const env = {
  sauce: {
    baseUrl: process.env.SAUCE_BASE_URL!,
    username: process.env.SAUCE_USERNAME!,
    password: process.env.SAUCE_PASSWORD!,
  },
  dummyApi: {
    baseUrl: process.env.DUMMY_API_BASE_URL!,
  }
};
