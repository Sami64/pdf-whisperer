import { Button } from '@/components/ui/button'
import {
	BrainCogIcon,
	EyeIcon,
	GlobeIcon,
	MonitorSmartphoneIcon,
	ServerCogIcon,
	ZapIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
	{
		name: 'Store your PDF Documents',
		description:
			'Keep all your important PDF files securely stored and easily accessible anytime, anywhere',
		icon: GlobeIcon,
	},
	{
		name: 'Search for Text in PDFs',
		description: 'Easily search for any text in your PDF documents',
		icon: EyeIcon,
	},
	{
		name: 'Convert PDFs to Text',
		description:
			'Convert any PDF document to text for easy editing and sharing',
		icon: ZapIcon,
	},
	{
		name: 'Analyze PDFs with AI',
		description:
			'Analyze your PDF documents with AI to extract valuable insights',
		icon: BrainCogIcon,
	},
	{
		name: 'Automate PDF Workflows',
		description: 'Automate your PDF workflows with our powerful API',
		icon: ServerCogIcon,
	},
	{
		name: 'Access PDFs on Any Device',
		description:
			'Access your PDF documents on any device, including desktop, tablet, and smartphone',
		icon: MonitorSmartphoneIcon,
	},
]

export default function Home() {
	return (
		<main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
			<div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
				<div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="text-base font-semibold leading-7 text-indigo-600">
							Your Interactive Document Companion
						</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Transform Your PDFs into Interactive Conversations
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Introducing{' '}
							<span className="font-bold text-indigo-600">Chat with PDF</span>
							<br />
							<br />
							Upload your document, and our chatbot will answer questions,
							summarize content, and answer all your Qs. Ideal for everyone,{' '}
							<span className="text-indigo-600">Chat with PDF</span>
							turns static documents into{' '}
							<span className="font-bold">dynamic conversations</span> enhancing
							productivity 10x fold efforlessly.
						</p>
					</div>
					<Button
						className="mt-10"
						asChild>
						<Link href="/dashboard">Get Started</Link>
					</Button>
				</div>

				<div className="relative overflow-hidden pt-16">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<Image
							src="https://i.imgur.com/VciRSTI.jpeg"
							alt="screenshot"
							className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
							width={2432}
							height={1442}
						/>
						<div
							aria-hidden="true"
							className="relative">
							<div className="absolute -inset-x-32 bottom-0 bg-gradient-to-t from-white/95 pt-[5%]" />
						</div>
					</div>
				</div>

				<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
					<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="relative pl-9">
								<dt className="inline font-semibold text-gray-900 ">
									<feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
								</dt>
								<dd>{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</main>
	)
}
