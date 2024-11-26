import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const Handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})

export { Handler as POST, Handler as GET }
