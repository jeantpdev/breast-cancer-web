import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Prueba', href: '/prueba/' },
  { name: 'Acerca de', href: '/acerca-de/' },
]

export default function Navigation({ currentPage }) {

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-14 xl:px-64 sm:py-2 bg-gray-800">
            <div className="relative flex h-16 items-center justify-start">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src="/img/breast-cancer-img.png"
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`rounded-md px-3 py-2 font-medium ${currentPage === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        aria-current={currentPage === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>       

              </div>
              <div className="hidden sm:block sm:justify-end">
                <a href="/prueba/" className=" font-medium px-5 py-2.5 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-pink-500 text-white hover:bg-pink-600 border-2 border-transparent">Realizar prueba</a>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${currentPage === item.href ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-500 hover:text-white'}`}
                  aria-current={currentPage === item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
