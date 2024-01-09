import DynamicTable from '../components/dynamic-table';

const LatestOrders = () => {
  return (
    <main className='w-full'>
      <div className='container mx-auto'>
        <div className='w-full h-[700px] mt-12 shadow-2xl p-5 rounded-3xl'>
          <div className='w-full'>
            <h2 className='text-lg font-bold text-brandSeven-500'>
              Últimos Pedidos
            </h2>
            <p className='text-sm font-semibold text-brandEight-500'>
              12 últimos messes
            </p>
          </div>

          <div className='mt-10'>
            <DynamicTable />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestOrders;
