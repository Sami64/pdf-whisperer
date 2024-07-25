'use client'

import byteSize from 'byte-size'
import { useRouter } from 'next/navigation'

const Document = ({
	id,
	name,
	size,
	downloadUrl,
}: {
	id: string
	name: string
	size: number
	downloadUrl: string
}) => {
	const router = useRouter()
	return (
		<div className="flex flex-col w-64 h-80 rounded-xl bg-white drop-shadow-md justify-between p-4 transition-all transform hover:scale-105 hover:bg-indigo-600 hover:text-white cursor-pointer group">
			<div
				className="flex-1"
				onClick={() => router.push(`/dashboard/files/${id}`)}>
				<p className="font-semibold line-clamp-2">{name}</p>
				<p className="text-xs text-gray-500">{byteSize(size).value} KB</p>
			</div>
		</div>
	)
}
export default Document
