import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className='relative bg-black min-h-screen flex flex-col'>
      <Popover className='max-w-7xl mx-auto w-full relative z-20'>
        <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
          <div>
            <Link href='/' className='flex'>
              <span className='sr-only'>NEXTFLIX</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt=''
              />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className=' rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
            <Popover.Group as='nav' className='flex space-x-10'>
              <a
                href='#'
                className='text-base font-medium text-gray-300 hover:text-gray-400'
              >
                Pricing
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-300 hover:text-gray-400'
              >
                Docs
              </a>
            </Popover.Group>
            <div className='flex items-center md:ml-12'>
              <a
                href='#'
                className='text-base font-medium text-gray-300 hover:text-gray-400'
              >
                Sign in
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='z-10 bg-gray-800 rounded-lg shadow-lg ring-opacity-5  divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='z-10 py-6 px-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    <a
                      href='#'
                      className='text-base font-medium text-white hover:text-gray-100'
                    >
                      Pricing
                    </a>

                    <a
                      href='#'
                      className='text-base font-medium text-white hover:text-gray-100'
                    >
                      Docs
                    </a>
                  </div>
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='https://external-preview.redd.it/x_O3ZIY_JM225HtAXfeEOGTYQR_dizhetHXZWxgTrDo.jpg?auto=webp&s=2f49ab329900cbfaccf22e086d52840fa32f2d8b'
          alt=''
        />
        <div
          className='absolute inset-0 bg-gray-700 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 sm:py-48'>
        <h1 className='text-4xl font-bold tracking-wide text-white sm:text-5xl'>
          Naruto Shippuden
        </h1>
        <p className='mt-6 text-xl text-gray-100 max-w-3xl'>
          After training abroad for more than two years, Naruto Uzumaki returns
          home and joins forces with Sakura Haruno to battle an evil
          organization.
        </p>
        <p className='mt-6 text-xl text-gray-300 max-w-3xl'>
          <span className='text-gray-400'>Starring: </span>
          Junko Takeuchi, Chie Nakamura, Kazuhiko Inoue
        </p>
        <button
          type='button'
          class='text-black bg-white font-medium rounded-sm text-sm mt-4 px-5 py-2.5 text-center tracking-widest inline-flex items-center'
        >
          PLAY
          <PlayIcon className='ml-2 h-6 w-6 text-black' />
        </button>
      </div>
    </div>
  );
};

export default Banner;
