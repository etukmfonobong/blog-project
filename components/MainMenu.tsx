import styles from '@styles/Componets.module.scss'
import { Transition } from '@headlessui/react'
import React, { useEffect, useRef } from 'react'
import profilePic from '@public/profile.png'
import Image from 'next/image'

export default function MainMenu(): JSX.Element {
  const [menuIsShowing, setMenuIsShowing] = React.useState(false)

  return (
    <div
      className='relative h-[35px] w-[35px] rounded-full cursor-pointer focus:outline-none  focus:hover:ring-4 ring-indigo-300'
      onClick={() => setMenuIsShowing(!menuIsShowing)}>
      <Image src={profilePic} />
      <DropDown menuIsShowing={menuIsShowing} setMenuIsShowing={setMenuIsShowing} />
    </div>
  )
}

type dropDownProps = {
  menuIsShowing: boolean
  setMenuIsShowing: React.Dispatch<React.SetStateAction<boolean>>
}

function DropDown({ menuIsShowing, setMenuIsShowing }: dropDownProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  useCloseDropdownIfUserClicksOutside(menuIsShowing, menuRef, setMenuIsShowing)

  return (
    <Transition
      show={menuIsShowing}
      enter='transform transition ease-out duration-100'
      enterFrom=' opacity-0 scale-95'
      enterTo=' opacity-100 scale-100'
      leave='transform transition ease-in duration-75'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      <div
        ref={menuRef}
        className='grid absolute right-0 grid-cols-1 gap-2 p-3 w-72 bg-white rounded-md shadow-lg origin-top-right focus:outline-none'
        role='menu'>
        <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>Write Posts</button>
        <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>View Profile</button>
        <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>Sign Out</button>
      </div>
    </Transition>
  )
}

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
