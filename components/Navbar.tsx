import Logo from '@components/Logo'
import styles from '@styles/Componets.module.scss'
import { useAppSelector } from '@lib/redux/hooks'
import { selectUser } from '@lib/redux/authSlice'
import profilePic from '@public/profile.png'
import Image from 'next/image'
import MainMenu from '@components/MainMenu'
import React, { useEffect, useRef } from 'react'
import { Transition } from '@headlessui/react'

function useCloseDropdownIfUserClicksOutside(
  menuIsShowing: boolean,
  menuRef: React.MutableRefObject<HTMLDivElement>,
  setMenuIsShowing: (value: ((prevState: boolean) => boolean) | boolean) => void
) {
  console.log('ref: ', menuRef)
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuIsShowing && !menuRef.current.contains(e.target)) {
        setMenuIsShowing(false)
      }
    }
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [menuIsShowing])
}

export default function Navbar(): JSX.Element {
  const user = useAppSelector(selectUser)
  const [menuIsShowing, setMenuIsShowing] = React.useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useCloseDropdownIfUserClicksOutside(menuIsShowing, menuRef, setMenuIsShowing)

  return (
    <div className='py-4 bg-white font-nunito'>
      <div className='flex flex-row flex-nowrap justify-between items-center px-2 mx-auto max-w-[1400px]'>
        <Logo />
        {!user && (
          <div>
            <button className={`${styles.button} ${styles.buttonHover}`}>Login</button>
            <button className={`${styles.button} ${styles.buttonHover} ml-3`}>Sign Up</button>
          </div>
        )}
        {user && (
          <div
            className='relative h-[35px] w-[35px] rounded-full cursor-pointer focus:outline-none  focus:hover:ring-4 ring-indigo-300'
            onClick={() => setMenuIsShowing(!menuIsShowing)}>
            <Image src={profilePic} />

            <Transition
              show={menuIsShowing}
              enter='transform transition ease-out duration-100'
              enterFrom=' opacity-0 scale-95'
              enterTo=' opacity-100 scale-100'
              leave='transform transition ease-in duration-75'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div ref={menuRef}>
                <MainMenu />
              </div>
            </Transition>
          </div>
        )}
      </div>
    </div>
  )
}
