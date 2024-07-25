import { auth } from '@clerk/nextjs/server'
import PlaceholderDocument from './PlaceholderDocument'
import Document from './Document'
import { adminDb } from '@/firebaseAdmin'

const Documents =async () => {
	auth().protect()
	const { userId } = auth()

	if (!userId) {
		throw new Error('No user id')
	}

	const documentSnapshot = await adminDb.collection('users').doc(userId).collection('files').get()


	return (
		<div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
			<PlaceholderDocument />
			{
				documentSnapshot.docs.map((doc) => {
					const {name, downloadUrl, size} = doc.data()

					return (
						<Document
							key={doc.id}
							id={doc.id}
							name={name}
							downloadUrl={downloadUrl}
							size={size}
						/>
					)
				})
			}
		</div>
	)
}
export default Documents
