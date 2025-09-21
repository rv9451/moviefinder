import React from 'react'

function NotFound() {
  return (
   <section class=" dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Sorry, we couldn't find the movie you're looking for. Please try again with a different title.</p>
        </div>   
    </div>
</section>
  )
}

export default NotFound