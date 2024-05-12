
import image from '../assets/img/Biryani .jpg'

export default function FoodCard({title, Price}) {
  return (
    <div>
        <div className='border-2 m-1 rounded-lg shadow-lg p-5 bg-lime-600 mx-5 w-56' >
            <img className=' w-40 rounded-lg ' src={image} alt="img" />
            <h2 className=' text-xl my-2    text-red-700 font-bold'>{title}</h2>
            <p className=' text-xs font-mono'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quas doloribus soluta incidunt.
            </p>
            <p>$ <span>{Price}</span></p>
            <button>Order now</button>
        </div>
    </div>
  )
}
