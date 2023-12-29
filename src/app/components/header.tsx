import Image from 'next/image';

import WhiteLogo from '/public/images/logo/white-logo.png';
import DynamicTooltip from './ui/dynamic-tooltip';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-brandFirst-500 w-full h-16 flex justify-center items-center'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src={WhiteLogo}
              alt='Logotipo Castro Naves'
              width={0}
              height={0}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='w-52 h-12'
            />
          </Link>

          <div className='text-3xl text-white flex flex-col justify-center items-center'>
            <DynamicTooltip
              titleText='Sair do sistema'
              subTitleText='Clique aqui para sair da sua conta.'
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
