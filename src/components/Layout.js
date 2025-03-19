import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JobberWoman - Job Listings</title>
        <meta name="description" content="Find your next career opportunity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            JobberWoman
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="hover:text-blue-200 transition duration-300">
                  Post a Job
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="min-h-screen bg-gray-100">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                JobberWoman
              </Link>
              <p className="mt-2 text-gray-400">Find your next career opportunity</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                Terms
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                Privacy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2025 JobberWoman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}