export default {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "books-ecommerce-471c2",
    private_key_id: "65e445610ebc8b81f9119130999ff8ca02ab4c72",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNyhh83CDNoO0r\nr6gdFBzk9Oia34v54vLJd4mK3EDXJqtK4/pyRPFWjPUAXh9FMpsv/9qwf5DJGUyQ\natc4sB+2acGaZG65CQGmM7iedE56PAv084gCWAFAKbWe9a8Ryw53SVpy9COP0uIG\n/9ZJrhKGZdz8Jm/GS4Wnpz7zlzsG0xpV85y76eyoWQWFgHYTLOfP2T5v/XSnk5PE\nMFSbNGA7l4BY7TADnsNrdVIMURW2u4TSkkTrjxXeoLuoDOX15edpL6CxiRJD9xcR\nePq5o4x0eo52g/1cy9l5ddHwcOhur/1W9N6TKZNecf4CHSzSAIg1qPdWGLVcWOv2\n8OLX341LAgMBAAECggEAUuAVtosMJuOtQA+wu20zKb27w0tN2ufb8OjUGnkTH9Jx\n32oqnURIkRuZO3msTDjSKKV4U+Y7z9EBdZOhczHyw4qZrmzN7nTDFkT0D9Q1GqL+\nCbrdxlvcvRNPEmJNC/RjsgR3iZ3qiGxcHIeBrBCPY1K4iU+NaiVWASuofX8lBVzb\nIaPq9yInEWcY7HiBGgVqCFSmeawLRq5gQIGZs1pHQGXxMp0+UomGZwyQHac1+XO0\nbGzGW46l7OtvV1tkZEQu2BL2wQJ3zuLSdhdRyI3XX5sO3Y5bu+0awksgWEZ6yPxu\nwqxy+XJRu8pUMJa6DlA7YOGrdGiJqfbo0/SKEnJyuQKBgQD8jk9qyEW7V8t5iHDz\ndcgIJjxF5OHwUsSSRsGDhtzimWpnPuR3PUW91gg+YXbb2PJ/0QSDQGQWWr61qgZ/\n/tA7ps2uCblIurquWHAIc1xmLGB+Bo6ZX4H8FMxv6y38pkbnQLxOeVYp8u5qmbSv\nYktG/Wl/82O2LM+WK7J2FCYXpQKBgQDQmIVB5bO1vy8tRFka0xrnioKDLQHXvYS/\nLOOqQyliCpv3vVTOO3ifndX+w0XRJMd/eKIRyJsjt9IJOWh+AQLrr73wo2Vu/MfO\nuVjzDT0SiesxAxuueqgbzk9nXHFNu+faH4pI8jDOk0+CRQFyDHgfHXKW4RUZY5Qh\n+vPL2+Z+LwKBgQC3YhIyhDd2ABrkJXl2nohfunu7eKXCXicT28K54VxUQXesflNg\nbaJNZLNZsGWg3xe+TaRMNZ43SS7/M/VCTWEgX08r1y2trMDOxbKbwEBQhFqQR+yV\nW29D/kov3gHnWUlUs4HILXyuOxJ5XyB+1Q25/1nyqWU2q7UT4qjT6m96bQKBgCQo\nS/EAQAZg/Wx7THa54RABkl3qj0c2Mqxwu4Xn3mSAMkjfKLQW2vHQCif+8TsvhOUz\no+QxQbMPSfkPWm18/2SbMfFkYVC7wGa0+hYnVU7BWWNFhqbX3Av11w2zmHBBAg9t\nKCs8z/j+z+lkzLtYLfo2wIYmveGIwUSim1/a3jlBAoGAPhq72z23JwowHS3Pu16W\nNijRXjGdPwaRVA7kj6ikJBtswJ6W4SaRQLnJinHeirbf0cgCthrrCZ8+BUJVRYhi\nDrtgW/xsP7Xa0YaJz/sxw6IKVWIsoTasj6mRZpohj1Hcr1QNuNuK4D/cx2L38q3W\nUDj+916DJ9nQjioJdQMdy3s=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-1q97h@books-ecommerce-471c2.iam.gserviceaccount.com",
    client_id: "113952790758875083871",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1q97h%40books-ecommerce-471c2.iam.gserviceaccount.com",
  },

  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: `./DB/ecommerce.sqlite`,
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "secret",
      database: "desafio-6",
    },
  },
};
