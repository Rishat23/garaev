import React, { useState } from 'react'
import { Dialog, Disclosure, Popover } from '@headlessui/react'
import {
	ArrowPathIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
	{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
	{ name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
	{ name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
	{ name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
	{ name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="bg-white w-full max-w-[72%] p-4 shadow-xl shadow-blue-gray-900/5 rounded-lg ml-auto left-4 mr-4 mb-4">
			<nav className="mx-auto flex max-w-7xl  items-center place-content-center p-6 lg:px-8" aria-label="Global">
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					<div className="flex lg:flex-1">
						<span className="text-sb font-semibold leading-6 text-gray-900 text-xl -m-1.5 p-1.5">
							Анализ технологий беспроводных сетей по стандартам 802.15
						</span>
					</div>
				</Popover.Group>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6
				sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button
												className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base
												 font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												Product
												<ChevronDownIcon
													className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[...products, ...callsToAction].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7
														text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900
									hover:bg-gray-50"
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900
									hover:bg-gray-50"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900
									hover:bg-gray-50"
								>
									Company
								</a>
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900
									hover:bg-gray-50"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}

export default Header
