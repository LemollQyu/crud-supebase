import Comment from "./comp/comment"
import prisma from "./libs/prisma"

const Home = async () => {
	
	const komentar = await prisma.text.findMany()
	
	
	
	
  return (
	<>
		<Comment />
		
		<div className="mt-10">
			
			{
				komentar.map(komentar => {
						return(
							<div key={komentar.id} className="border mt-2">
								
								
								<p className=" font-italic">{komentar.comment}</p>
							</div>
						)
				})
				
			}
			
			</div>

	</>
  )
}


export default Home
