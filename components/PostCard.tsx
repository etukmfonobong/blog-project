import { EyeIcon, HeartIcon } from '@heroicons/react/outline'
import styles from '@styles/Componets.module.scss'

export default function PostCard(): JSX.Element {
  return (
    <div className='flex flex-col py-5 px-7 font-nunito border border-[#52606D] shadow-sm bg-white rounded-sm'>
      <p className='mb-2 text-sm font-bold'>@user123</p>
      <p className='text-lg font-semibold'>Consume APIs in your react app like a pro.</p>
      <p className='mb-3 text-sm font-normal'>{"Hint, don't repeat yourself!"}</p>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='flex flex-row items-center mr-3'>
            <HeartIcon className={styles.iconStyle} />
            <div className='text-sm'>18</div>
          </div>
          <div className='flex flex-row items-center mr-3'>
            <EyeIcon className={styles.iconStyle} />
            <div className='text-sm'>200</div>
          </div>
        </div>
        <div className='text-sm'>240 words . 1 min read</div>
      </div>
    </div>
  )
}
