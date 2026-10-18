// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";



/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "LeynaMacke";

// Name shown in the hero section
export const name = githubUsername;

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };


/* Social Links
 **************************************************************
  Add or remove links below. Icons - https://icon-sets.iconify.design/
*/
export const socialLinks = [
  {
    id: "instagram",
    url: "https://www.instagram.com/leyna_1_renee",
    icon: "fa-brands:instagram-square",
    label: "Instagram",
  },
    {
    id: "facebook",
    url: "https://www.facebook.com/share/1cZExLdZBJ/?mibextid=wwXIfr",
    icon: "fa-brands:facebook",
    label: "Facebook",
  },
];

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `
I am a theatre artist based out of Fort Wayne, Indiana. I'm currently pursuing my BFA in Musical Theatre at Purdue University Fort Wayne and plan to graduate spring '27. I have also completed the Comedy Studies program at the Second City through Columbia College Chicago. 

​

In my free time, I enjoy outdoor activities such as hiking, skiing, and rafting. I love reading and will happily discuss books with you!

​
`;

export const skillData = [
  {
  },
];

/* Resumes
 **************************************************************
  PDFs are served from the public directory. Add the file to /public and
  reference it by filename below.
*/
export const resumes = [
  {
    id: "performance",
    name: "Performance",
    file: `${process.env.PUBLIC_URL}/resume.pdf`,
  },
  {
    id: "tech",
    name: "Tech",
    file: `${process.env.PUBLIC_URL}/resume-tech.pdf`,
  },
];

/* Videos
 **************************************************************
  Add YouTube videos below. `id` is the part after "watch?v=" in the URL.
*/
export const videoData = [
 /* 
  {
    id: "YrdFf1jgeeM",
    title: "Skills Reel",
  },
  {
    id: "Hn7PBiht7ds",
    title: "Vocal Reel",
  },
  {
    id: "jdijBwREoYQ",
    title: "Puppet Reel",
  },
  {
    id: "rkGt2d0IUEs",
    title: "Dance Reel",
  },
];
*/

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xrpzanej";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
