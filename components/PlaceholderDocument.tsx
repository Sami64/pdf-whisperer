'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const PlaceholderDocument = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/dashboard/upload')
	}

	return (
		<Button
			onClick={handleClick}
			className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
			<PlusCircleIcon />
			<p>Add a document</p>
		</Button>
	)
}
export default PlaceholderDocument
