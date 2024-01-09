interface OrderDetailsProps {
  params: {
    numOrder: string;
  };
}

const OrderDetails = ({ params }: OrderDetailsProps) => {
  const { numOrder } = params;

  console.log(numOrder);

  return (
    <div>
      <p>Número Pedido: {numOrder}</p>
    </div>
  );
};

export default OrderDetails;
