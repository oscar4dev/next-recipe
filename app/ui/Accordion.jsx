'use client'

import { useState } from "react"
import AccordionItem from "./AccordionItem"

const data = [
   {
      id: 1,
      question: 'What kind of recipes does the app offer?',
      answer: 'Our app features a diverse collection of recipes, including: International cuisines (e.g., Italian, Mexican, Indian, Chinese), Dietary restrictions (e.g., vegetarian, vegan, gluten-free, paleo), Cooking levels (beginner, intermediate, advanced), Meal types (breakfast, lunch, dinner, desserts, snacks), Special occasions (holidays, parties).'
   },
   {
      id: 2,
      question: 'How do I find recipes I will enjoy?',
      answer: 'Browse: Explore our curated recipe collections and categories. Search: Use keywords (ingredients, dish names, cuisines) to find specific recipes. "Discover" section: Get personalized recommendations based on your past searches and ratings.'
   },
   {
      id: 3,
      question: 'Can I save my favorite recipes?',
      answer: 'Yes, you can easily save recipes to your personal "Favorites" list.'
   },
   {
      id: 4,
      question: 'Is the app free to use?',
      answer: 'Yes, our app is absolutely free to use'
   },
   {
      id: 5,
      question: 'Can I substitute ingredients?',
      answer: 'While we do not offer automatic substitutions, many recipes include helpful tips and suggestions for ingredient swaps.'
   },
   {
      id: 6,
      question: 'How do I rate a recipe?',
      answer: 'You can easily rate recipes with stars (e.g., 1-5 stars) to indicate how much you enjoyed them.'
   },
   {
      id: 7,
      question: 'Can I leave comments or reviews?',
      answer: 'Yes, you can share your feedback and experiences with other users by leaving comments on recipes.'
   },
   {
      id: 8,
      question: 'How do I contact customer support?',
      answer: 'You can contact our support team by using the in-app contact link on this app.'
   },
]

export default function Accordion() {

   const [curOpen, setCurOpen] = useState(null)

   return (
      <ul className="flex flex-col items-center justify-center gap-8 px-4 max-w-[1024px] mx-auto">
         {
            data.map((item) => {
               return <AccordionItem 
                  key={ item.id }
                  item={ item }
                  num={ item.id }
                  curOpen={ curOpen }
                  setCurOpen={ setCurOpen }
               />
            })
         }
      </ul>
   )
}
