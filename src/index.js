import "./styles.css";

import topBannerImg from "./assets/images/top-banner.jpg";
import twitterJpg from "./assets/icons/twitter.jpeg";

import PhoneImg from "./assets/images/phone.svg";

/* 

Accessibility checklist - record what I do, to summarise elsewhere:

  1. Semantic HTML:
    header, main, footer, sections, etc.

  2. Use of alts for all images


*/

/* 

Stages of approach:

1. Overall framework of 3 sections
  - put some media query framework structure in
  - use accessible objects

2. Top section:
  - diagonal background
  - read into how to have text wrap around image
  - layered absolute image (I think)
  - go full design with media queries
  - different images for different widths/resolutions

3. Middle section:
  - Aim to do this fully through grid.
  - Even number of projects should mean a flexible grid is plenty without media queries
  - Possibly just margins in media queries, not the grid itself
  - Should be able to create a project that will not differ by screen size
    - may need to adjust text size or screenshot quality?

4. Bottom section:
  - Media queries for each design.
  - Careful on text wrapping
  - Otherwise broadly similar with two elements - text and image
  - Use different images in different screen sizes

*/

const setupHeaderDom = () => {
  const topImg = document.querySelector("#top-image");
  topImg.src = topBannerImg;
  topImg.alt = "People sat around table working collaboratively";

  const socialMediaIcons = document.querySelector("#social-media-icons");

  const twitterIcon = document.createElement("img");
  twitterIcon.setAttribute("id", "twitter");
  twitterIcon.classList.add("socials-link");
  twitterIcon.setAttribute("src", twitterJpg);
  twitterIcon.setAttribute("alt", "Twitter");

  // socialMediaIcons.appendChild(twitterIcon);
};

setupHeaderDom();
