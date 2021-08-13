import Logo from '@components/Logo'
import styles from '@styles/Componets.module.scss'
import { useAppSelector } from '@lib/redux/hooks'
import { selectUser } from '@lib/redux/authSlice'
import MainMenu from '@components/MainMenu'

export default function Navbar(): JSX.Element {
  const user = useAppSelector(selectUser)

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
        {user && <MainMenu />}
      </div>
    </div>
  )
}
