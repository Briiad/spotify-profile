import React from 'react'
import { Link } from 'react-router-dom'

const SectionWrapper = ({ children, title, seeAllLink, breadcrumb }) => {
  return (
    <section className='container mx-auto px-10 mb-8'>
      <div className='w-full relative'>
        <div className='flex justify-between items-stretch text-white py-6'>
          <h2 className='text-4xl font-bold'>
            {breadcrumb && (
              <span>
                <Link to='/'>Profile</Link>
              </span>
            )}

            {title && (
              <>
                {seeAllLink ? (
                  <Link to={seeAllLink}>{title}</Link>
                ) : (
                  <span>{title}</span>
                )}
              </>
            )}
          </h2>
          
          {seeAllLink && (
            <Link to={seeAllLink} className='flex items-end uppercase text-sm tracking-wide opacity-50'>See All</Link>
          )}

        </div>

        {children}
      </div>
    </section>
  )
}

export default SectionWrapper