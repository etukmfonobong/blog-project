import Logo from '@components/Logo'
import styles from '@styles/Componets.module.scss'
import { useAppSelector } from '@lib/redux/hooks'
import { selectUser } from '@lib/redux/authSlice'
import profilePic from '@public/profile.png'
import Image from 'next/image'
import MainMenu from '@components/MainMenu'

export default function Navbar(): JSX.Element {
  const user = useAppSelector(selectUser)
  return (
    <div className='py-4 bg-white font-nunito'>
      <div className='flex flex-row flex-nowrap justify-between items-center px-2 mx-auto max-w-[1400px]'>
        <Logo />
        {user && (
          <div>
            <button className={styles.button}>Login</button>
            <button className={`${styles.button} ml-3`}>Sign Up</button>
          </div>
        )}
        {!user && (
          <div className='relative h-[35px] w-[35px] rounded-full'>
            <Image src={profilePic} />
            <div className='grid grid-cols-1 gap-2 w-72 bg-white origin-top-right absolute right-0 shadow-lg rounded-md p-3'>
              <button className={styles.buttonDropdown}>Write Posts</button>
              <button className={styles.buttonDropdown}>View Profile</button>
              <button className={styles.buttonDropdown}>Sign Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
