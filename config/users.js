const users = {
  testUser1: {
    email: 'Harrison30@gmail.com',
    password: 'oO_PI6jocB1JOLN',
  },
};

export default function getCredentials(keyword) {
  return users[keyword];
}
