import anime from '../../assets/anime.png'
import dentist from '../../assets/dentist.png'
import gym from '../../assets/gym.png'
import resto from '../../assets/resto.png'
import watch from '../../assets/watch.png'
import home from '../../assets/home.png'
import bose from '../../assets/bose.png'
import cocktails from '../../assets/cocktails.png'
import realestate from '../../assets/realestate.png'

export const projects = [
  {
    id: 9,
    image: realestate,
    name: 'New Home',
    technos: 'NEXT JS,API REST',
    desription:
      'This website allows users to search for and browse listings of properties for sale or rent. It typically includes information about the properties, such as descriptions, photos, and pricing',
    github: 'https://github.com/IsmaelAvotra/real-estate-app',
    demo: 'https://real-estate-app-six-gold.vercel.app/',
  },
  {
    id: 1,
    image: anime,
    name: 'FindAnime',
    technos: 'React JS, API REST',
    desription:
      "It's a site made with React,and uses a jikan API.There is the top anime, the recommendations that change every day, an about page, and you can search for all the anime and see the details.I did the design myself.It's responsive. ",
    github: 'https://github.com/IsmaelAvotra/animesearch-app',
    demo: 'https://anime-find.netlify.app/',
  },
  {
    id: 2,
    image: dentist,
    name: 'Dentalist',
    technos: 'Astro JS, React JS',
    desription:
      "It's a website made with astro that has different pages. I chose astro for this project because this framework is very fast for content-focused website like our case.The design was on Dribble.",
    github: 'https://github.com/IsmaelAvotra/dentalist',
    demo: 'https://dentalist-astro.netlify.app/',
  },
  {
    id: 3,
    image: gym,
    name: 'Gym me',
    technos: 'React JS',
    desription:
      "Integration of a design seen on Dribble.I used React Js and Swiper Js a library for the slider.I made this landing page to practice integration with pure CSS and React syntaxes.It's responsive.",
    github: 'https://github.com/IsmaelAvotra/gym-me',
    demo: 'https://gymm-me.netlify.app/',
  },

  {
    id: 4,
    image: resto,
    name: 'Next Resto',
    technos: 'Next JS, API REST',
    desription:
      "I started studying Next not long ago and I really liked especially the Server component in version 13. For this website I tested the app directory which is still a beta so we can't make a demo yet.I did the design myself and i use the spoonacular API.It's responsive.",
    github: 'https://github.com/IsmaelAvotra/next-resto',
    demo: 'https://github.com/IsmaelAvotra/next-resto',
  },

  {
    id: 5,
    image: watch,
    name: 'WatchKart',
    technos: 'React JS',
    desription:
      "I really liked this design that I saw on figma community and wanted to turn it into a website.I took all the photos in the original version so loading takes a little time.It's responsive.",
    github: 'https://github.com/IsmaelAvotra/watch-website',
    demo: 'https://wathch-website.netlify.app/',
  },

  {
    id: 6,
    image: home,
    name: 'HomeLand',
    technos: 'React JS, Tailwind CSS',
    desription:
      "I wanted to test Tailwind CSS for this project and I really liked it. It was a design I saw on Youtube,a good exercise in integration with Tailwind and search filter with React.You can see the details of each house at the details page and it's responsive.",
    github: 'https://github.com/IsmaelAvotra/Site-achat-d-appartement',
    demo: 'https://homeland-site.netlify.app/',
  },
  {
    id: 7,
    image: bose,
    name: 'Bose Landingpage',
    technos: 'React JS',
    desription:
      "A design I saw in the figma community. It was a good integration exercise. I used AOS an on scroll animation library.It's responsive",
    github: 'https://github.com/IsmaelAvotra/bose-landingpage',
    demo: 'https://bose-landingpage.netlify.app/',
  },
  {
    id: 8,
    image: cocktails,
    name: 'CocktailsDB',
    technos: 'React JS,API REST',
    desription:
      "A website where you can search for all the cocktails. You can see how to prepare it and what the ingredients are.I used the DB cocktails api. I did the design myself and it's responsive.",
    github: 'https://github.com/IsmaelAvotra/cocktails',
    demo: 'https://cocktails-find.netlify.app/',
  },
]
