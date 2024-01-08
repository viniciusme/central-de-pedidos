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
  getKeyValue,
} from '@nextui-org/react';
import { api } from '@/lib/api';
import { users } from '@/lib/data';

export default function DynamicTable() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const checkUserToken = async () => {
    const userToken = window.localStorage.getItem('tokenAuth');

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

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
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
        <TableColumn key='numOrder'>Número Pedido</TableColumn>
        <TableColumn key='dateOrder'>Data do Pedido</TableColumn>
        <TableColumn key='nfe'>NFe</TableColumn>
        <TableColumn key='lastStatus'>Situação</TableColumn>
        <TableColumn key='numOrderTwo'>Rastrear Pedido</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.numOrder}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
