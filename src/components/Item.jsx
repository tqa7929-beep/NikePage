import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className='group relative'>
      
      <Link to={`/products/${product?.id}`}>
        
        {/* CONTENEDOR CON HOVER */}
        <div className='relative overflow-hidden rounded-md bg-gray-800/50 lg:h-80 h-96 border border-gray-700/50'>
          
          {/*IMAGEN */}
          <img 
            src={product?.image} 
            alt={product?.name} 
            className='h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110'
          />

          {/* MÁSCARA GRIS */}
          <div className='absolute top-[-100%] left-0 w-full h-full bg-gray-300/50 transition-all duration-300 group-hover:top-0'></div>

        </div>

      </Link>

      {/*INFO DEL PRODUCTO */}
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-foreground'>
            <Link to={`/products/${product?.id}`}>
              <span aria-hidden="true">{product?.name}</span>
            </Link>
          </h3>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
      </div>

    </div>
  )
}

export default Item