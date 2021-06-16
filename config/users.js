const users = {
  testUser1: {
    email: 'Harrison30@gmail.com',
    password: 'oO_PI6jocB1JOLN',
  },
  testUser2: {
    email: 'Bryon55@gmail.com',
    password: 'UYn4zvvJS45jLqB',
  },
};

export default function getCredentials(keyword) {
  return users[keyword];
}
