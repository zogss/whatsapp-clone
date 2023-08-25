import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { Fragment, useMemo, useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { usePopper } from 'react-popper';

interface AvatarProps {
  type: 'sm' | 'md' | 'lg' | 'xl';
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Avatar: React.FC<AvatarProps> = ({ type, value, onChange, error }) => {
  //* states
  const [hover, setHover] = useState(false);
  const targetRef = useRef<HTMLButtonElement | null>(null);
  const popperRef = useRef<any>(null);
  const { styles, attributes } = usePopper(
    targetRef.current,
    popperRef.current
  );

  //* memos
  const memoizedImage = useMemo(() => {
    const smSize = 'h-10 w-10';
    const mdSize = 'h-20 w-20';
    const lgSize = 'h-40 w-40';
    const xlSize = 'h-60 w-60';

    let currentSize = smSize;

    switch (type) {
      case 'sm':
        currentSize = smSize;
        break;
      case 'md':
        currentSize = mdSize;
        break;
      case 'lg':
        currentSize = lgSize;
        break;
      case 'xl':
        currentSize = xlSize;
        break;
      default:
        break;
    }

    return (
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              type="button"
              ref={targetRef}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="relative"
            >
              <div
                className={clsx(
                  'bg-photopicker-overlay-background absolute inset-0 flex flex-col items-center rounded-full justify-center text-center gap-2',
                  currentSize,
                  hover ? 'visible z-10' : 'invisible'
                )}
              >
                <FaCamera id="context-opener" className="text-2xl" />
                <span>Change Profile Photo</span>
              </div>
              <div
                className={clsx(
                  'flex items-center justify-center',
                  currentSize
                )}
              >
                <Image src={value} alt="Avatar" className="rounded-full" fill />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                ref={popperRef}
                style={styles.popper}
                className="w-screen max-w-sm px-4 sm:px-0"
                {...attributes.popper}
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  teste
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }, [attributes.popper, hover, styles.popper, type, value]);

  //* render
  return (
    <div className="flex items-center justify-center">
      {memoizedImage}
      {error && (
        <span className="text-start text-red-600 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Avatar;
