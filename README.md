# **My Portfolio Website**

__**Welcome to the open-source code of my website!**__ This project was developed to hone my software skills and showcase my projects to humanity. I've built it from scratch, using **React + TailwindCSS + Frame motion + Three.js** packages to create a fantastic site. I've also added shaders to make it more vibrant.

*• You can see the live version of my site by clicking [here](https://www.alicelik.dev)*


![Homepage](https://i.hizliresim.com/rs98j0v.png)

## **✨ Features**

This site has a host of features designed to provide a highly dynamic and visually vibrant user experience.

- **Design**: **Tailwind CSS v4** was used to provide a look suitable for both computers and mobile devices, while also avoiding writing CSS, resulting in a very simple structure.

- **WebGL**: Now for my favorite feature: **Shaders**. Using **Three.js** and **OGL**, the site has been made much more vibrant and colorful by animating the shaders. Variety has been increased by using a different shader on each page.

- **Animations**: I've significantly improved the user experience by using the **Framer motion** library, which I use extensively on my site, transforming it from a static to a fluid experience. Visitors now encounter a much more dynamic site.

- **Interactive Gallery**: The **Projects** section on the homepage was written from scratch in React and spins like a wheel of fortune, allowing you to see all my projects from beginning to end. You can also click on them to go to the relevant link for that project.

- **Projects**: While displaying my projects on the Projects page, you can always see the latest projects in their most up-to-date form using the **Github API** key from Github.

- **EmailJS**: I implemented the email sending function in the About section using **EmailJS**, and messages arrive instantly to my email address. Visitors can thus send emails directly to me without using their own email address.

## **📂 Project Structure**

The project follows a logical and organized folder structure to keep the codebase clean and maintainable.

```shell
/  
├── public/  
│   ├── docs/
├── src/  
│   ├── assets/  
│   ├── components/  
│   ├── pages/  
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  
├── .env  
├── index.html  
├── package.json  
├── README.md  
├── vercel.json  
└── vite.config.js