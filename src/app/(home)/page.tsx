import Image from 'next/image';

import Logo from '/public/images/logo/logo.png';
import { CardWithForm } from './components/card-with-form';

export default function Home() {
  return (
    <main className='min-h-screen bg-background-login bg-no-repeat bg-right-bottom'>
      <div className='container mx-auto relative flex justify-center items-center md:justify-start'>
        <Image
          src={Logo}
          alt='Logotipo Castro Naves'
          width={0}
          height={0}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='absolute w-52 h-12 top-10'
        />
      </div>

      <div className='flex items-center justify-center h-full min-h-screen'>
        <CardWithForm />
      </div>
    </main>
  );
}
