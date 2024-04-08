import { Pin } from '@/utils/api';
import React from 'react';
import { Skeleton, Text, useMantineColorScheme } from '@mantine/core';
import { BASE_URL } from '@/utils/request';
import { isNil } from 'ramda';
import cls from 'classnames';

type Iprops = {
  p?: Pin;
  isLoading?: boolean;
};

const PinCard = ({ p, isLoading = false }: Iprops) => {
  const { colorScheme } = useMantineColorScheme();

  const content = isNil(p)
    ? ''
    : p.content.length <= 35
    ? p.content
    : p.content.slice(0, 35) + '...';

  if (isNil(p)) {
    return (
      <Skeleton>
        <div className={cls('flex flex-col gap-2 border rounded-md p-4', {
      'border-[var(--mantine-color-dark-4)]':
        colorScheme === 'dark',
    })}>
          <div className='flex items-center justify-between'>
            <Text size='xl' fw={700}>
              {'#' + '123'}
            </Text>
            <Text>{'abcd'}</Text>
          </div>

          <div className='flex gap-2 '>
            <Text size='sm' c='dimmed' fs='italic'>
              operation:
            </Text>
            <Text size='sm' c='dimmed' fs='italic'>
              {'abcd'}
            </Text>
          </div>

          <div className='flex gap-2'>
            <Text size='sm' c='dimmed' fs='italic'>
              path:
            </Text>
            <Text size='sm' c='dimmed' fs='italic'>
              {'abcd'}
            </Text>
          </div>

          <Text className='break-words'>{'abcd'}</Text>
        </div>
      </Skeleton>
    );
  }

  return (
    <div className={cls('flex flex-col gap-2 border rounded-md p-4', {
      'border-[var(--mantine-color-dark-4)]':
        colorScheme === 'dark',
    })}>
      <div className='flex items-center justify-between'>
        <Text size='xl' fw={700}>
          {'#' + p.number}
        </Text>
        <Text>{p.rootId.slice(0, 4) + '...' + p.rootId.slice(-4)}</Text>
      </div>

      <div className='flex gap-2 '>
        <Text size='sm' c='dimmed' fs='italic'>
          operation:
        </Text>
        <Text size='sm' c='dimmed' fs='italic'>
          {p.operation}
        </Text>
      </div>

      <div className='flex gap-2'>
        <Text size='sm' c='dimmed' fs='italic'>
          path:
        </Text>
        <Text size='sm' c='dimmed' fs='italic'>
          {p.path}
        </Text>
      </div>

      {p.type.includes('image') ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={BASE_URL + p.content}
          alt='content image'
          width={50}
          height={50}
        />
      ) : (
        <Text className='break-words'>{content}</Text>
      )}
    </div>
  );
};

export default PinCard;
