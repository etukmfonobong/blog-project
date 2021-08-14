import PostCard from '@components/PostCard'

export default function Home(): JSX.Element {
  return (
    <main className='flex flex-col'>
      <div className='mx-auto mt-10 w-3/5'>
        <PostCard />
      </div>
      <button className='font-nunito text-sm mt-6 bg-blogGray w-3/5 mx-auto py-2 text-white font-semibold rounded-md'>Load More</button>
    </main>
  )
}
