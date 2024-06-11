import { createSlice } from '@reduxjs/toolkit'
const initialState={
    jobs: [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": [],
        "jobDescription":"Eveniet libero distinctio. Assumenda voluptatibus ratione dolor amet officia animi. Corrupti quasi nulla sapiente earum est voluptas quas. Fugit debitis distinctio nulla quas odit occaecati dolorum deleniti aliquam. Fugiat vero quam iure hic sunt harum nisi. Harum odit cum nostrum sequi eius accusamus quas.",
        "salary": "$72,460"
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"],
        "jobDescription":"Earum reprehenderit dolore modi provident magni cum ipsam. Soluta voluptatibus sapiente harum in mollitia natus accusantium deserunt fuga. In aliquid itaque. Voluptatum minus nisi rerum expedita esse.",
        "salary": "$89,230"
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"],
        "jobDescription":"In esse commodi nesciunt sint nihil accusantium facere veniam. Unde cumque assumenda. Deleniti nam magnam fugiat ratione nam impedit cupiditate maxime repellendus. Veniam impedit modi velit repudiandae blanditiis nostrum possimus adipisci delectus.",
        "salary": "$124,360"
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": [],
        "jobDescription":"Quam quisquam necessitatibus voluptates quam aperiam molestias quam. Repellat suscipit iusto impedit aspernatur nulla ab vel adipisci. Doloremque officia at. Id unde sunt incidunt fugiat architecto vitae earum id tenetur. Debitis occaecati aperiam dolores pariatur placeat unde aut praesentium. Fuga modi veniam.",
        "salary": "$67,120"
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby"],
        "tools": ["Sass"],
        "jobDescription":"Non occaecati rerum consequuntur non harum. Sunt maxime voluptate nihil eius. Et necessitatibus ratione eaque suscipit quia aliquid.",
        "salary": "$97,400"
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"],
        "jobDescription":"Eos consequatur in blanditiis doloribus beatae voluptas quos laboriosam. Qui alias optio architecto dicta veritatis error alias. Voluptatem modi nobis. Reiciendis similique repudiandae quia hic. Fugit molestias voluptate unde. Inventore debitis laboriosam aut quod omnis quibusdam recusandae.",
        "salary": "$126,280"
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"],
        "jobDescription":"Nam et optio accusantium. Repudiandae repudiandae necessitatibus dicta. At voluptatem magni dolorem amet in incidunt fugit. Veritatis necessitatibus sit culpa necessitatibus explicabo officia odit tempore. Eos nulla harum vero. Assumenda unde possimus maxime.",
        "salary": "$79,460"
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"],
        "jobDescription":"Omnis laborum maxime magni ipsum non tempora. Voluptas facilis libero. Dolore necessitatibus quia libero dolorum ab reiciendis suscipit.",
        "salary": "$114,360"
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"],
        "jobDescription":"Quo in unde quas omnis possimus porro dolor ipsa nisi. Qui quis quam reiciendis esse magnam corporis. Modi iusto voluptates. Illo deleniti sequi quidem",
        "salary": "$126,640"
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"],
        "jobDescription":"Odio doloribus esse. Ipsam consequatur harum. Cumque nihil est illum quia consequuntur dolorem iste. At dicta laborum. Perferendis veritatis ducimus recusandae. Porro exercitationem fugiat reprehenderit vero.",
        "salary": "$99,160"
      }
    ]
    ,
    filters:[]
}


const jobsSlice= createSlice({
    name:'jobs',
    initialState,
    reducers:{
        addFilter:(state, action)=>{
            if(!state.filters.includes(action.payload)){
              state.filters.push(action.payload)
            }
        },
        deleteOneFilter:(state, action)=>{
          const index=state.filters.indexOf(action.payload)
          state.filters.splice(index, 1)
        },
        deleteAllFilters:(state)=>{
          state.filters.splice(0, state.filters.length)
        }
    }
})

const {actions, reducer}=jobsSlice
export {actions, reducer}