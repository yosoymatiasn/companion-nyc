import Link from 'next/link';

type Props = {};

const Header = ({}: Props) => {
  return (
    <>
      <header className='flex justify-between items-center max-w-6xl mx-auto py-8 border-b border-black mb-10'>
        <h1 className='m-0'>The Loneliness Project</h1>
        <nav>
          <ul>
            <li>
              <Link href=''>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='mb-10 flex flex-col items-center max-w-4xl mx-auto'>
        <p className='text-3xl text-center font-light'>
          “The person you are right now is as transient, as fleeting and as
          temporary as all the people you&apos;ve ever been.”
        </p>
        <p className='mt-2'> — Dr. Daniel Gilbert</p>
      </div>
    </>
  );
};

export default Header;
