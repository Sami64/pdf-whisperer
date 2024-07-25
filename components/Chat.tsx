'use client'

import { askQuestion } from '@/actions/askQuestion'
import { db } from '@/firebase'
import { useUser } from '@clerk/nextjs'
import { collection, orderBy, query } from 'firebase/firestore'
import { Loader2Icon } from 'lucide-react'
import { FormEvent, useEffect, useRef, useState, useTransition } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Button } from './ui/button'
import { Input } from './ui/input'
import ChatMessage from './ChatMessage'

export type Message = {
	id?: string
	role: 'human' | 'ai' | 'placeholder'
	message: string
	createdAt: Date
}

const Chat = ({ id }: { id: string }) => {
	const { user } = useUser()
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState<Message[]>([])
	const [isPending, startTransition] = useTransition()
	const bottomOfChatRef = useRef<HTMLDivElement>(null)

	const [snapshot, loading, error] = useCollection(
		user &&
			query(
				collection(db, 'users', user?.id, 'files', id, 'chat'),
				orderBy('createdAt', 'asc')
			)
	)

	useEffect(() => {
		bottomOfChatRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	useEffect(() => {
		if (!snapshot) return

		const lastMessage = messages.pop()

		if (lastMessage?.role === 'ai' && lastMessage.message === 'Thinking...') {
			return
		}
		const newMessages = snapshot.docs.map((doc) => {
			const { role, message, createdAt } = doc.data()

			return {
				id: doc.id,
				role,
				message,
				createdAt: createdAt.toDate(),
			}
		})

		setMessages(newMessages)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [snapshot])

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const q = input

		setInput('')

		setMessages((prev) => [
			...prev,
			{ role: 'human', message: q, createdAt: new Date() },
			{ role: 'ai', message: 'Thinking...', createdAt: new Date() },
		])

		startTransition(async () => {
			const { success, message } = await askQuestion(id, q)

			if (!success) {
				setMessages((prev) =>
					prev.slice(0, prev.length - 1).concat([
						{
							role: 'ai',
							message: `Whoops... ${message}`,
							createdAt: new Date(),
						},
					])
				)
			}
		})
	}

	return (
		<div className="flex flex-col h-full overflow-scroll">
			<div className="flex-1 w-full">
				{loading ? (
					<div className="flex items-center justify-center">
						<Loader2Icon className="animate-spin h-20 w-20 text-indigo-600 mt-20" />
					</div>
				) : (
					<div className='p-5'>
						{messages.length === 0 && (
							<ChatMessage
								key="placeholder"
								message={{
									role: 'ai',
									message: 'Welcome! Ask me anything.',
									createdAt: new Date(),
								}}
							/>
						)}
						{messages.map((message) => (
							<ChatMessage
								key={message.id}
								message={message}
							/>
						))}
						<div ref={bottomOfChatRef} />
					</div>
				)}
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex sticky bottom-0 space-x-2 p-5 bg-indigo-600/75">
				<Input
					placeholder="Ask a Question..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					disabled={!input || isPending}
					type="submit">
					{isPending ? (
						<Loader2Icon className="animate-spin text-indigo-600" />
					) : (
						'Ask'
					)}
				</Button>
			</form>
		</div>
	)
}
export default Chat
