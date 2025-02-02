import Link from 'next/link'
import Button from './components/button'
import Image from 'next/image'
import notFound from '../public/notFound.svg'

export const metadata = {
    title: "404"
}
 
export default function NotFound() {
  return (
    <div className='relative h-screen'>
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
            <div className='flex justify-center'>
                <Image src={notFound} alt="404" className='h-48 w-48' />
            </div>
            <h1 className='text-6xl font-extrabold mb-5 text-center'>404: Page Not Found</h1>

            <div>
                <p className='text-lg mb-5'>Oops! The page you’re looking for doesn’t exist. It might have been moved, deleted, or never existed in the first place.</p>
                <p>🔍 Try this</p>
                <div className='ml-8'>
                    <li>
                        <ul>
                            <li>Check the URL for any typos.</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Use the navigation menu to find what you need.</li>
                        </ul>
                    </li>
                </div>
            </div>
            
            <div className='mx-auto mt-8 flex justify-center'>
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}