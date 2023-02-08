import React from "react";
import { NavLink } from "react-router-dom";
const About = () =>{
    return (
        <div>

<div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1428&q=80" alt="image" loading="lazy" width="" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl ">Welcome To Our Art Gallery</h2>
          <p class="mt-6 text-gray-600">We have handpicked and curated our collections to ensure that every piece of art is of the highest quality and relevance. Our team of art experts is constantly on the lookout for new and exciting works, so that our collections always remain fresh and up-to-date.</p>
          <p class="mt-4 text-gray-600">Whether you are a seasoned art collector or simply someone looking to beautify your home with unique pieces, you'll find something that speaks to you at our gallery. We have a wide variety of styles and mediums, from contemporary paintings to traditional sculptures, and everything in between.</p>
        </div>
      </div>
  </div>
</div>
        </div>
    )
}

export default About;