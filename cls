[33mcommit a73f7d5f90167f6350d211d80ffbc4c2512d856f[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: AdilSami11 <adilsamikhan2005@gmail.com>
Date:   Fri Oct 9 21:47:28 2026 +0500

    Working on Responsiveness and fixing also some small bugs...

[1mdiff --git a/public/javascripts/.gitkeep b/public/javascripts/.gitkeep[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/public/javascripts/navbarLogic.js b/public/javascripts/navbarLogic.js[m
[1mnew file mode 100644[m
[1mindex 0000000..393cb41[m
[1m--- /dev/null[m
[1m+++ b/public/javascripts/navbarLogic.js[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32mconst menuToggle = document.querySelector("#menu-toggle");[m
[32m+[m[32mconst navMenu = document.querySelector("#nav-menu");[m
[32m+[m
[32m+[m[32mmenuToggle.addEventListener("click", () => {[m
[32m+[m[32m  const isOpen = navMenu.classList.toggle("active");[m
[32m+[m
[32m+[m[32m  menuToggle.setAttribute("aria-expanded", isOpen);[m
[32m+[m[32m});[m
[1mdiff --git a/public/stylesheets/mainPage.css b/public/stylesheets/mainPage.css[m
[1mindex 4909758..9fd5e2b 100644[m
[1m--- a/public/stylesheets/mainPage.css[m
[1m+++ b/public/stylesheets/mainPage.css[m
[36m@@ -28,6 +28,9 @@[m [mbody {[m
   justify-content: space-between;[m
   padding: 0 50px;[m
 }[m
[32m+[m[32m.navbar-wrapper > i {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m}[m
 [m
 .logo {[m
   font-size: 1.7rem;[m
[36m@@ -366,23 +369,52 @@[m [mbody {[m
   font-size: 1rem;[m
   color: #ffffff;[m
 }[m
[31m-/* .products-main-wrapper {[m
[31m-  max-width: 1200px;[m
[31m-  margin: auto;[m
[31m-  border: 2px solid red;[m
[31m-  display: grid;[m
[31m-  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));[m
[31m-  padding: 40px;[m
[31m-  gap: 10px;[m
[32m+[m[32m@media screen and (max-width: 768px) {[m
[32m+[m[32m  .navbar-wrapper {[m
[32m+[m[32m    padding: 0 20px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .logo {[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m    letter-spacing: 1px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .nav-links-wrapper {[m
[32m+[m[32m    gap: 20px;[m
[32m+[m[32m  }[m
 }[m
 [m
[31m-.product {[m
[31m-  border: 2px solid rgb(36, 103, 15);[m
[31m-  padding: 20px 5px;[m
[32m+[m[32m@media screen and (max-width: 575px) {[m
[32m+[m[32m  .navbar-wrapper {[m
[32m+[m[32m    position: relative;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .logo {[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .nav-links-wrapper {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m    flex-direction: column;[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    top: 100%;[m
[32m+[m[32m    right: 0;[m
[32m+[m[32m    z-index: 100;[m
[32m+[m[32m    padding: 20px;[m
[32m+[m[32m    gap: 18px;[m
[32m+[m[32m    background-color: #f8f6f1;[m
[32m+[m[32m    /* min-height: 100vh; */[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .navbar-wrapper > i {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m    color: #1f1f1f;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .nav-links-wrapper.active {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m  }[m
 }[m
[31m-.product-panel img {[m
[31m-  width: 100%;[m
[31m-  height: 200px;[m
[31m-  object-fit: cover;[m
[31m-  overflow: hidden;[m
[31m-} */[m
[1mdiff --git a/public/stylesheets/register.css b/public/stylesheets/register.css[m
[1mindex 4fd1270..d7a1298 100644[m
[1m--- a/public/stylesheets/register.css[m
[1m+++ b/public/stylesheets/register.css[m
[36m@@ -1,10 +1,10 @@[m
[31m-@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');[m
[32m+[m[32m@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");[m
 [m
 * {[m
   margin: 0;[m
   padding: 0;[m
   box-sizing: border-box;[m
[31m-  font-family: 'Roboto', sans-serif;[m
[32m+[m[32m  font-family: "Roboto", sans-serif;[m
 }[m
 html,[m
 body {[m
[36m@@ -70,3 +70,41 @@[m [mform > input {[m
   background-color: #3d30cb;[m
   cursor: pointer;[m
 }[m
[32m+[m
[32m+[m[32m@media screen and (max-width: 768px) {[m
[32m+[m[32m  .main-wrapper {[m
[32m+[m[32m    padding: 0 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m  .form-wrapper {[m
[32m+[m[32m    max-width: 400px;[m
[32m+[m[32m    padding: 60px 10px;[m
[32m+[m[32m    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.232);[m
[32m+[m[32m  }[m
[32m+[m[32m  .form-wrapper h2 {[m
[32m+[m[32m    font-size: 1.6rem;[m
[32m+[m[32m    font-variant: small-caps;[m
[32m+[m[32m  }[m
[32m+[m[32m  form > input {[m
[32m+[m[32m    padding: 12px 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m  .btns-wrapper button {[m
[32m+[m[32m    padding: 11px 25px;[m
[32m+[m[32m    border-radius: 5px;[m
[32m+[m[32m    font-weight: 400;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media screen and (max-width: 575px) {[m
[32m+[m[32m  .form-wrapper {[m
[32m+[m[32m    max-width: 360px;[m
[32m+[m[32m    padding: 30px 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m  .form-wrapper h2 {[m
[32m+[m[32m    font-size: 1.4rem;[m
[32m+[m[32m  }[m
[32m+[m[32m  form > input {[m
[32m+[m[32m    padding: 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m  .btns-wrapper button {[m
[32m+[m[32m    padding: 8px 20px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/views/index.ejs b/views/index.ejs[m
[1mindex 0c3bc05..8b48d95 100644[m
[1m--- a/views/index.ejs[m
[1m+++ b/views/index.ejs[m
[36m@@ -13,28 +13,23 @@[m
 [m
   <body>[m
     <div class="main-page-wrapper">[m
[31m-    <% if(user.isAdmin === true){ %>[m
         <div class="navbar-wrapper">[m
         <div class="logo">NAQSH</div>[m
[31m-        <div class="nav-links-wrapper">[m
[32m+[m[32m        <div class="nav-links-wrapper" id="nav-menu">[m
           <a href="/">Home</a>[m
           <a href="/products">Products</a>[m
           <a href="/cart">Cart (<%= cartCount %>)</a>[m
[31m-          <a href="/cart">Add Products</a>[m
[32m+[m[32m          <% if(user.isAdmin === true) { %>[m
[32m+[m[32m            <a href="/cart">Add Products</a>[m
[32m+[m[32m          <% } %>[m
           <a href="/profile"><img src="/uploads/<%= user.picture %>" alt="profile-img"></a>[m
         </div>[m
[32m+[m[32m        <i class="ri-menu-fill" id="menu-toggle"[m
[32m+[m[32m          role="button" tabindex="0"[m
[32m+[m[32m          aria-label="Toggle navigation"[m
[32m+[m[32m          aria-expanded="false" ></i>[m
       </div>[m
[31m-   <% } else{ %>[m
[31m-    <div class="navbar-wrapper">[m
[31m-        <div class="logo">NAQSH</div>[m
[31m-        <div class="nav-links-wrapper">[m
[31m-          <a href="/">Home</a>[m
[31m-          <a href="/products">Products</a>[m
[31m-          <a href="/cart">Cart (<%= cartCount %>)</a>[m
[31m-          <a href="/profile"><img src="/uploads/<%= user.picture %>" alt="profile-img"></a>[m
[31m-        </div>[m
[31m-      </div>[m
[31m-   <% } %>[m
[32m+[m[41m   [m
       <!-- hero-section -->[m
       <div class="hero-sec-wrapper">[m
         <div class="hero-content">[m
[36m@@ -105,5 +100,6 @@[m
       </div>[m
      <%- include('./partials/footer.ejs') %>[m
     </div>[m
[32m+[m[32m    <script src="/javascripts/navbarLogic.js" defer></script>[m
   </body>[m
 </html>[m
