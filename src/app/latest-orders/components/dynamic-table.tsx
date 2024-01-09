'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from '@nextui-org/react';
import { api } from '@/lib/api';

interface IOrders {
  numOrder: number;
  dateOrder: string;
  nfe: string;
  lastStatus: string;
}

export default function DynamicTable() {
  const router = useRouter();
  const userToken = window.localStorage.getItem('tokenAuth');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(orders.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return orders.slice(start, end);
  }, [page, orders]);

  const checkUserToken = async () => {
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      router.push('/');
    } else {
      api
        .get('/orders/latest-orders', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          api.defaults.headers.common.Authorization = `Bearer ${userToken}`;
        })
        .catch((error) => {
          setIsLoggedIn(false);
          window.localStorage.removeItem('tokenAuth');
          router.push('/');
        });
    }
  };

  async function getLatestOrders(page: number = 1) {
    await api
      .get(`/orders/latest-orders`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        setOrders([]);
        console.log(error);
      });
  }

  useEffect(() => {
    getLatestOrders();
  }, []);

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      {orders.length > 0 ? (
        <Table
          aria-label='Example table with client side pagination'
          bottomContent={
            <div className='flex w-full justify-center'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='secondary'
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: 'min-h-[222px]',
          }}
        >
          <TableHeader>
            <TableColumn>Número Pedido</TableColumn>
            <TableColumn>Data do Pedido</TableColumn>
            <TableColumn>NFe</TableColumn>
            <TableColumn>Situação</TableColumn>
            <TableColumn>Rastrear Pedido</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((order: IOrders) => (
              <TableRow key={order.numOrder}>
                <TableCell>{order.numOrder}</TableCell>
                <TableCell>{order.dateOrder}</TableCell>
                <TableCell>
                  <a href={order.nfe} target='_blank' rel='noopener noreferrer'>
                    IMAGEM
                  </a>
                </TableCell>
                <TableCell>{order.lastStatus}</TableCell>
                <TableCell>
                  <a href={`/order-details/${order.numOrder}`}>DETALHES</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>Nenhum pedido para ser mostrado.</p>
      )}
    </>
  );
}
