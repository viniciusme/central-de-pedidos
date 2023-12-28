'use client';

import * as React from 'react';

import { Button } from '@/app/components/ui/button';
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

      <CardFooter className='flex justify-between'>
        <Button className='w-full bg-brandFirst-500 hover:bg-brandFirst-600 active:bg-brandFirst-700 focus:outline-none focus:ring focus:ring-brandFirst-300'>
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
}
