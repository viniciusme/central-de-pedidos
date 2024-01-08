'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

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
import { api } from '@/lib/api';

const schema = yup
  .object({
    cpnjcpf: yup.string().required('CPNJ ou CPF é obrigatório'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function CardWithForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const { cpnjcpf } = data;

    await api
      .post('/auth', {
        documentNumber: cpnjcpf,
      })
      .then((response) => {
        console.log(response);

        // Armazenando o token no localStorage
        localStorage.setItem('tokenAuth', response.data.token);
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

        router.push('/latest-orders');
      })
      .catch((error) => {
        console.log(error);

        alert(error.response.data.message);
      });
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5 gap-1'>
              <Label htmlFor='cpnjcpf'>
                <Input
                  id='cpnjcpf'
                  placeholder='CNPJ / CPF'
                  {...register('cpnjcpf')}
                />
              </Label>
              <p className='text-xs font-light text-brandFirst-500'>
                {errors.cpnjcpf?.message}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className='flex justify-between mt-5'>
          <Button
            type='submit'
            radius='md'
            className='w-full bg-gradient-to-tr from-brandFirst-300 to-brandFirst-500 text-white font-semibold text-lg hover:shadow-lg hover:bg-brandFirst-600 active:bg-brandFirst-700 focus:outline-none focus:ring focus:ring-brandFirst-300 uppercase'
          >
            Entrar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
