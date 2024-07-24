import { currentUser } from '@clerk/nextjs/server'

const Greetings = async () => {
	const user = await currentUser()

	return (
		<div className="py-5 max-w-7xl mx-auto px-5 xl:px-0">
			<p className="text-2xl">
				Hey <span className="font-bold text-indigo-600">{user?.username}</span>,
				What&apos;s Good?{' '}
			</p>
		</div>
	)
}
export default Greetings
