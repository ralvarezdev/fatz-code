import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    // Create a new user
    const newUser=await prisma.user.createMany({data:[{
        email:'pepe@gmail.com',
            name:'pepe'
        },{
            email:'pepedev@gmail.com', name:'pepe'}]})
    console.log(`Created new user: ${JSON.stringify(newUser)}`)

    // Create a new post
    const newPost=await prisma.post.create({data:{title:"Post 2",content:"Content 2",author:{connect:{email:"pepe@gmail.com"}}}})
    console.log(`Created new post: ${JSON.stringify(newPost)}`)

    // Create user with posts
    const newUserWithPosts=await prisma.user.create({
        data:{
             email:'pepeposts@gmail.com', name:'pepe', posts:{create:{title:"Post 1",content:"Content 1"}}}})
    console.log(`Created user with posts: ${JSON.stringify(newUserWithPosts)}`)

    // Get all users with posts
    const users=await prisma.user.findMany({include:{posts:true}})
    console.log(`All users: ${JSON.stringify(users)}`)

    // Delete all posts
    const deletedPosts=await prisma.post.deleteMany()
    console.log(`Deleted posts: ${JSON.stringify(deletedPosts)}`)

    // Find first user
    const user=await prisma.user.findFirst({where:{email:"pepe@gmail.com"}})
    console.log(`First user: ${JSON.stringify(user)}`)

    // Update many users
    const updatedUsers=await prisma.user.updateMany({where:{name:"pepe"},data:{name:"pepe2"}})
    console.log(`Updated users: ${JSON.stringify(updatedUsers)}`)

    // Update user
    const updatedUser=await prisma.user.update({where:{email:"pepe@gmail.com"},data:{name:"pepe3"}})
    console.log(`Updated user: ${JSON.stringify(updatedUser)}`)

    // Upsert user
    const upsertedUser=await prisma.user.upsert({
        where:{email:"pepebusiness@gmail.com"},
        update:{name:"pepe4"},
        create:{name:"pepe",email:"pepebusiness@gmail.com"}})
    console.log(`Upserted user: ${JSON.stringify(upsertedUser)}`)

    // Delete user
    for (const name of ["pepe","pepe2","pepe3"]) {
        const deletedUser = await prisma.user.deleteMany({where: {name}})
        console.log(`Deleted user: ${JSON.stringify(deletedUser)}`)
    }
}

main().then(()=>{
    prisma.$disconnect()
})