import { toast } from "react-hot-toast";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function ProfileScreen() {
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className='mx-auto max-w-3xl py-12 space-y-3'>
      <div className='overflow-hidden bg-gray-900'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-100'>
            User Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-300'>
            Personal details and subscription status.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y sm:divide-gray-200'>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>Full name</dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                {user.displayName}
              </dd>
            </div>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>
                Application for
              </dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                Backend Developer
              </dd>
            </div>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>
                Email address
              </dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                {user.email}
              </dd>
            </div>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>
                Salary expectation
              </dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                $120,000
              </dd>
            </div>
            <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>About</dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            {/* <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
              <dt className='text-sm font-medium text-gray-300'>Attachments</dt>
              <dd className='mt-1 text-sm text-gray-100 sm:col-span-2 sm:mt-0'>
                <ul
                  role='list'
                  className='divide-y divide-gray-200 rounded-md border border-gray-200'
                >
                  <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                    <div className='flex w-0 flex-1 items-center'>
                      <PaperClipIcon
                        className='h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2 w-0 flex-1 truncate'>
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>

      <button
        onClick={() =>
          signOut(auth)
            .then(() => {
              toast.success("Sign-out successful.");
            })
            .catch((error) => {
              toast.error(error.message);
            })
        }
        className='w-full bg-red-600 hover:bg-red-700 text-gray-100 sm:col-span-2 cursor-pointer flex text-center items-center justify-center py-3 pl-3 pr-4 text-md'
      >
        Sign Out
      </button>
    </div>
  );
}
