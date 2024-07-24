'use client'

import { Separator } from '@/components/ui/separator'
import logo from '@/public/assets/logo.png'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'

export default function SignInPage() {
	return (
		<div className="grid w-full flex-grow items-center bg-indigo-600 px-4 sm:justify-center">
			<SignIn.Root>
				<SignIn.Step
					name="start"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<Image
						src={logo}
						alt="alt"
					/>
					<p className="text-center text-xl font-bold text-zinc-600">
						PDF <span className="text-indigo-600">Whisper</span>-er
					</p>
					<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
						Sign in to your{' '}
						<span className="text-indigo-600 font-bold">account</span>{' '}
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
						<span>Sign in with Google</span>
					</Clerk.Connection>

					<Clerk.Field
						name="identifier"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Email
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignIn.Action
						submit
						className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
						Continue
					</SignIn.Action>
					<p className="text-center text-sm text-zinc-500">
						No account?{' '}
						<a
							href="/sign-up"
							className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline">
							Create an account
						</a>
					</p>
				</SignIn.Step>

				<SignIn.Step
					name="verifications"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<SignIn.Strategy name="email_code">
						<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
							Check your email
						</h1>
						<p className="text-center text-sm tracking-tight font-medium text-zinc-950">
							We sent a code to <SignIn.SafeIdentifier />.
						</p>

						<Clerk.Field
							name="code"
							className="space-y-2">
							<Clerk.Label className="text-sm font-medium text-zinc-950">
								Email code
							</Clerk.Label>
							<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignIn.Action
							submit
							className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Continue
						</SignIn.Action>
					</SignIn.Strategy>

					<SignIn.Strategy name="password">
						<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
							Enter your password
						</h1>

						<Clerk.Field
							name="password"
							className="space-y-2">
							<Clerk.Label className="text-sm font-medium text-zinc-950">
								Password
							</Clerk.Label>
							<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignIn.Action
							submit
							className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Continue
						</SignIn.Action>
						<SignIn.Action navigate="forgot-password">
							Forgot password?
						</SignIn.Action>
					</SignIn.Strategy>

					<SignIn.Strategy name="reset_password_email_code">
						<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
							Check your email
						</h1>
						<p className="text-center text-sm tracking-tight font-medium text-zinc-950">
							We sent a code to <SignIn.SafeIdentifier />.
						</p>

						<Clerk.Field
							name="code"
							className="space-y-2">
							<Clerk.Label className="text-sm font-medium text-zinc-950">
								Email code
							</Clerk.Label>
							<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
							<Clerk.FieldError />
						</Clerk.Field>

						<SignIn.Action
							submit
							className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Continue
						</SignIn.Action>
					</SignIn.Strategy>
				</SignIn.Step>

				<SignIn.Step
					name="forgot-password"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
						Forgot your password?
					</h1>
					<div className="flex justify-between items-center">
						<SignIn.SupportedStrategy name="reset_password_email_code">
							<span className="font-semibold text-indigo-600 underline">
								Reset password
							</span>
						</SignIn.SupportedStrategy>

						<SignIn.Action
							navigate="previous"
							className="rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
							Go back
						</SignIn.Action>
					</div>
				</SignIn.Step>

				<SignIn.Step
					name="reset-password"
					className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-lg ring-1 ring-black/5 sm:w-96 sm:px-8">
					<h1 className="text-center text-sm tracking-tight font-medium text-zinc-950">
						Reset your password
					</h1>

					<Clerk.Field
						name="password"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							New password
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<Clerk.Field
						name="confirmPassword"
						className="space-y-2">
						<Clerk.Label className="text-sm font-medium text-zinc-950">
							Confirm password
						</Clerk.Label>
						<Clerk.Input className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400" />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignIn.Action
						submit
						className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70">
						Reset password
					</SignIn.Action>
				</SignIn.Step>
			</SignIn.Root>
		</div>
	)
}
