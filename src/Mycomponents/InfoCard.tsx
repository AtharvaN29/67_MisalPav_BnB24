export default function InfoCard(props) {
  return (
    <div className='z-50 flex justify-center items-center m-3'>
      <a
        href='#'
        className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src='/docs/images/blog/image-4.jpg'
          alt=''
        />
        <div className='flex flex-col justify-between p-3 leading-normal text-left'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {props.item.name}
          </h5>
          <h2>{props.item.company_name}</h2>
          <h2>Raw Material : {props.item.raw_material}</h2>
          <h3>
            Manufacturing Practices : {props.item.manufacturing_practices}
          </h3>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            veniam earum enim corrupti!
          </p>
        </div>
      </a>
    </div>
  )
}
