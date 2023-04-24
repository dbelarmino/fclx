import NextAuth from 'next-auth'
import KeyCloakProvider from 'next-auth/providers/keycloak'

export const authConfig = {
  providers: [
    KeyCloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string
    })
  ]
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }