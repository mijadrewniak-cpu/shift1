SHIFT HEALING CENTER WEBSITE — HOW TO OPEN IT

1. Install Visual Studio Code.
2. Open Visual Studio Code.
3. Click File > Open Folder.
4. Choose the folder named: shift-healing-center
5. Open the dist folder, then index.html.
6. For the easiest preview, install the “Live Server” extension in Visual Studio Code.
7. Right-click index.html and choose “Open with Live Server.”

IMPORTANT FOR VIDEO
If you double-click index.html and open it as a file, YouTube may block embedded playback with Error 153. The website now shows a clickable YouTube preview instead. To play the video inside the page, always use “Open with Live Server.” This restriction disappears once the website is properly hosted.

FILES
- dist/index.html — finished homepage
- dist/about.html — page 2
- dist/services.html — page 3
- dist/specialties.html — page 4
- dist/team.html — page 5
- dist/resources.html — page 6
- dist/contact.html — page 7
- dist/styles.css — colors, sizes, layout and mobile design
- dist/script.js — homepage mobile menu
- dist/pages.js — content/layout for the six inner pages

LOGO
Your real SHIFT logo is already installed as dist/assets/logo.png and appears on all seven pages.

ADD THE HERO PHOTO
Put your photo inside dist/assets and name it hero.jpg.
In styles.css, find .hero and replace the second linear-gradient with:
url('assets/hero.jpg') center/cover no-repeat

ADD THE CARE PHOTO
In index.html find the words PHOTO SPACE and replace the whole div with:
<img src="assets/care.jpg" alt="A calm, welcoming therapy space">

CHANGE THE YOUTUBE VIDEO
In dist/index.html search for M7lc1UVf-VE and replace both occurrences with your final YouTube video ID.
The video ID is the part after youtu.be/ or after watch?v= in the YouTube link.

IMPORTANT
The contact form is currently a visual demo. It needs to be connected to an email/form service before the website goes live.

NUMBERED IMAGES
Put every image directly inside dist/assets using these exact names:
1.png = homepage hero image
2.png = homepage Care That Helps You Move Forward image
3.png = Therapy Approaches hero image
4.png = Therapy Approaches supporting image
5.png = Specialties image
6.png = Our Team image
7.png = Resources image
8.png = Contact page image
logo.png = SHIFT logo

Do not put the images beside index.html. They must be inside the assets folder.

TEAM PORTRAITS
Put these JPG files inside dist/assets:
stephanie.jpg
barbara.jpg
nicole.jpg
rebecca.jpg
caci.jpg
jennifer.jpg
leslee-anne.jpg
courtney.jpg
shae.jpg
jodi.jpg

Use lowercase filenames exactly as shown above.
