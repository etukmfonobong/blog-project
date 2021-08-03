import styles from '@styles/Componets.module.scss'

export default function MainMenu(): JSX.Element {
  return (
    <div
      className='grid absolute right-0 grid-cols-1 gap-2 p-3 w-72 bg-white rounded-md shadow-lg origin-top-right focus:outline-none'
      role='menu'>
      <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>Write Posts</button>
      <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>View Profile</button>
      <button className={`${styles.buttonDropdown} ${styles.buttonHover}`}>Sign Out</button>
    </div>
  )
}
