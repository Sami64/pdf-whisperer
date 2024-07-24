'use client'

import { Separator } from '@/components/ui/separator'
import logo from '@/public/assets/logo.png'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Image from 'next/image'

export default function SignUpPage() {
	return (
		<div className="grid w-full flex-grow items-center bg-indigo-600 px-4 sm:justify-center min-h-screen">
			<SignUp.Root>
				<SignUp.Step
					name="start"
					className="w-full space-y-6 rounded-2xl max-h-[95%] overflow-y-auto bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<Image
						src={logo}
						alt="alt"
					/>
					<p className="text-center text-xl font-bold text-zinc-600">
						PDF <span className="text-indigo-600">Whisper</span>-er
					</p>

					<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
						Create an account
					</h1>

					<Separator />
					<Clerk.GlobalError className="block text-sm text-red-400" />
					<Clerk.Connection
						name="google"
						className="flex items-center space-x-2 justify-center shadow-md p-2 rounded-lg w-full hover:shadow-indigo-600/50 hover:shadow-sm">
						<Image
							src={'/assets/google.svg'}
							alt="google-logo"
							width={20}
							height={20}
						/>
						<span>Sign up with Google</span>
					</Clerk.Connection>

					<Clerk.Field
						name="username"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Username
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<Clerk.Field
						name="emailAddress"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Email
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<Clerk.Field
						name="password"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Password
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignUp.Action
						submit
						className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
						Sign up
					</SignUp.Action>
				</SignUp.Step>

				<SignUp.Step
					name="continue"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
						Fill in missing fields
					</h1>

					<Clerk.Field
						name="username"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Username
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignUp.Action
						submit
						className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
						Continue
					</SignUp.Action>
				</SignUp.Step>

				<SignUp.Step
					name="verifications"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<SignUp.Strategy name="phone_code">
						<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
							Check your phone for an SMS
						</h1>

						<Clerk.Field
							name="code"
							className="space-y-2">
							<Clerk.Label className="text-sm font-medium text-zinc-950">
								Phone Code
							</Clerk.Label>
							<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignUp.Action
							submit
							className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Verify
						</SignUp.Action>
					</SignUp.Strategy>

					<SignUp.Strategy name="email_code">
						<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
							Check your email
						</h1>

						<Clerk.Field
							name="code"
							className="space-y-2">
							<Clerk.Label className="text-sm font-medium text-zinc-950">
								Email Code
							</Clerk.Label>
							<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignUp.Action
							submit
							className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Verify
						</SignUp.Action>
					</SignUp.Strategy>
				</SignUp.Step>
			</SignUp.Root>
		</div>
	)
}
