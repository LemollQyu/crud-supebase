import prisma from "../../../libs/prisma"

export async function POST(request) {
	const { comment } = await request.json()
	const data = { comment }
	
	const createcomment = await prisma.text.create({ data })
	
	if(!createcomment) return Response.json({ status: 500, isCreated: false})
		else return Response.json({ status: 200, isCreated: true })
	
	
}