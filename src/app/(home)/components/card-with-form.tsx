'use client';

import * as React from 'react';

import { Button } from '@nextui-org/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import Link from 'next/link';

const handleSubmit = () => {
  console.log('Teste');
};

export function CardWithForm() {
  return (
    <Card className='w-[350px] shadow-2xl'>
      <CardHeader>
        <CardTitle className='text-xl text-center text-brandFirst-500 uppercase'>
          Rastreamento de Pedidos
        </CardTitle>
        <CardDescription className='text-sm text-center'>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Digite o CNPJ ou CPF</Label>
              <Input id='name' placeholder='CNPJ / CPF' />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className='flex justify-between mt-5'>
        <Button
          radius='md'
          className='w-full bg-gradient-to-tr from-brandFirst-300 to-brandFirst-500 text-white font-semibold text-lg hover:shadow-lg hover:bg-brandFirst-600 active:bg-brandFirst-700 focus:outline-none focus:ring focus:ring-brandFirst-300 uppercase'
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
}
