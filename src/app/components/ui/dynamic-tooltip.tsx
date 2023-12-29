import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { RiDoorOpenFill } from 'react-icons/ri';
import Link from 'next/link';

interface DynamicTooltipProps {
  titleText: string;
  subTitleText: string;
}

export default function DynamicTooltip({
  titleText,
  subTitleText,
}: DynamicTooltipProps) {
  return (
    <Tooltip
      content={
        <div className='px-1 py-2'>
          <div className='text-small font-bold'>{titleText}</div>
          <div className='text-tiny'>{subTitleText}</div>
        </div>
      }
    >
      <Link href='/'>
        <div className='flex flex-col items-center justify-center'>
          <RiDoorOpenFill />
        </div>
      </Link>
    </Tooltip>
  );
}
