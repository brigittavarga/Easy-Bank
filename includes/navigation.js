document.write(
    `
    <nav class="nav-main">

      <div class="logo">
        <a href="index.html"><img src="images/logo.svg" alt="Logo"></a>
    </div> <!-- logo -->
  
    <ul class="nav-links desktop-nav">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Careers</a></li>
    </ul>
  
      <button class="invite-btn modal-btn">Request Invite</button>
  
        <div onclick="toggleFunction()" id="burger" class="burger">
          <div class="svg-container-burger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
          </div>
          <div class="svg-container-toggle-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
          </div>
          <ul class="nav-links mobile-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
  
    </nav>
    `
)