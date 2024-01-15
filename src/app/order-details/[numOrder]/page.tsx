import React from 'react';
import { Button } from '@nextui-org/react';

interface OrderDetailsProps {
  params: {
    numOrder: string;
  };
}

const OrderDetails = ({ params }: OrderDetailsProps) => {
  const { numOrder } = params;

  console.log(numOrder);

  return (
    <div className='w-full'>
      <div className='container mx-auto'>
        <div className='w-full h-[700px] mt-12 shadow-2xl p-5 rounded-3xl'>
          <div className='w-full flex flex-col gap-2'>
            <div className='flex items-center justify-start'>
              <Button
                radius='full'
                className='w-36 bg-gradient-to-tr from-brandFirst-300 to-brandFirst-500 text-white font-semibold text-base hover:shadow-lg hover:bg-brandFirst-600 active:bg-brandFirst-700 focus:outline-none focus:ring focus:ring-brandFirst-300 uppercase'
              >
                Voltar
              </Button>
            </div>

            <div className='flex items-center justify-center'>
              <h2 className='text-xl font-bold text-brandSeven-500 not-italic tracking-normal leading-normal'>
                Central de Pedidos
              </h2>
            </div>

            <div className='flex justify-between items-center'>
              <p className='text-sm font-semibold text-brandEight-500'>
                Pedido: 5452541
              </p>

              <p>Data Prevista da Entrega: 23/08/2023</p>
            </div>
          </div>

          <div className='mt-10'>
            <p>Teste</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
