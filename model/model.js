var loggedInOut = false;
var homeContent =`

<div class="site-wrapper">

    <div class="hero">
       
        <div class="callout">
            <h1>The Life of My Turtles</h1>
        <p>Mitsuki, Legoshi, & Haru</p>
   
    </div>  
</div>

<div class="text">

<h1>Lorem Ipsum Dolor Sit Amet</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Curabitur blandit ligula tortor, non aliquam massa vestibulum vel. Nam imperdiet dui eget fringilla convallis. Maecenas ut euismod sapien. Curabitur ac quam elementum, pretium libero tempus, tempus dui. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada volutpat sollicitudin. Nulla vitae dolor diam. Sed scelerisque ante dolor, ut dapibus nisl semper nec. Phasellus vitae leo sed nisl pulvinar dignissim vitae eget risus. Vivamus sollicitudin sapien in odio tempor, eget vulputate libero bibendum. Pellentesque nec purus quis risus tempor sodales vitae eu nibh. Phasellus a egestas odio, quis lacinia orci. Aenean vel elit placerat, volutpat nunc sit amet, condimentum magna. Pellentesque euismod tellus scelerisque risus tempor pretium. Morbi nec ipsum interdum, efficitur sapien eu, ornare mi. Proin dictum maximus tellus, eu sodales lectus dignissim et. Proin quis risus sodales, sodales mauris sed, consequat erat. Morbi quis lectus egestas, condimentum nunc vel, semper purus. Sed tempor ac massa ut accumsan.</p>
</div>

<div class="collec">

    <div class="of1">
        <div class="photo1"></div>
    </div>
    <div class="of2">
        <div class="photo2"></div>
    </div>
    <div class="of3">
        <div class="photo3"></div>
    </div>
    
</div>

`;
var aboutContent =`

<div class="text">

<h1>Mitsuki</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Curabitur blandit ligula tortor, non aliquam massa vestibulum vel. Nam imperdiet dui eget fringilla convallis. Maecenas ut euismod sapien. Curabitur ac quam elementum, pretium libero tempus, tempus dui. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada volutpat sollicitudin. Nulla vitae dolor diam. Sed scelerisque ante dolor, ut dapibus nisl semper nec. Phasellus vitae leo sed nisl pulvinar dignissim vitae eget risus. Vivamus sollicitudin sapien in odio tempor, eget vulputate libero bibendum. Pellentesque nec purus quis risus tempor sodales vitae eu nibh. Phasellus a egestas odio, quis lacinia orci. Aenean vel elit placerat, volutpat nunc sit amet, condimentum magna. Pellentesque euismod tellus scelerisque risus tempor pretium. Morbi nec ipsum interdum, efficitur sapien eu, ornare mi. Proin dictum maximus tellus, eu sodales lectus dignissim et. Proin quis risus sodales, sodales mauris sed, consequat erat. Morbi quis lectus egestas, condimentum nunc vel, semper purus. Sed tempor ac massa ut accumsan.</p>
</div>
<div class="mit">

    <div class="m1">
        <div class="photo1"></div>
    </div>
    <div class="m2">
        <div class="photo2"></div>
    </div>
    <div class="m3">
        <div class="photo3"></div>
    </div>
    
</div>

<div class="text">

<h1>Legoshi</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Curabitur blandit ligula tortor, non aliquam massa vestibulum vel. Nam imperdiet dui eget fringilla convallis.  lacus risus non nunc. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Curabitur blandit ligula tortor, non aliquam massa vestibulum vel. Nam imperdiet dui eget fringilla convallis.  lacus risus non nunc. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada volutpat sollicitudin. Nulla vitae dolor diam. Sed scelerisque ante dolor, ut dapibus nisl semper nec. Phasellus vitae leo sed nisl pulvinar dignissim vitae eget risus. Vivamus sollicitudin sapien in odio tempor, eget vulputate libero bibendum. Pellentesque nec purus quis risus tempor sodales vitae eu nibh. Phasellus a egestas odio, quis lacinia orci. Aenean vel elit placerat, volutpat nunc sit amet, condimentum magna. Pellentesque euismod tellus scelerisque risus tempor pretium. Morbi nec ipsum interdum, efficitur sapien eu, ornare mi. Proin dictum maximus tellus, eu sodales lectus dignissim et. Proin quis risus sodales, sodales mauris sed, consequat erat. Morbi quis lectus egestas, condimentum nunc vel, semper purus. Sed tempor ac massa ut accumsan.</p>
</div>
<div class="leg">

    <div class="l1">
        <div class="photo1"></div>
    </div>
    <div class="l2">
        <div class="photo2"></div>
    </div>
    <div class="l3">
        <div class="photo3"></div>
    </div>
    
</div>

<div class="text">

<h1>Haru</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

<p>Curabitur blandit ligula tortor, non aliquam massa vestibulum vel. Nam imperdiet dui eget fringilla convallis. Maecenas ut euismod sapien. Curabitur ac quam elementum, pretium libero tempus, tempus dui. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Donec eu felis vitae odio sollicitudin sagittis. Sed varius, elit eget suscipit efficitur, tortor lacus efficitur diam, consequat blandit lacus risus non nunc. Mauris aliquam faucibus augue, vitae molestie ex vehicula ac. Nam tincidunt posuere pretium.</p>

</div>
<div class="har">

    <div class="h1">
        <div class="photo1"></div>
    </div>
    <div class="h2">
        <div class="photo2"></div>
    </div>
    <div class="h3">
        <div class="photo3"></div>
    </div>
    
</div>




`;
var productsContent =`
<div class="mhero">
</div>
<div class="tips">
<h1>Lorem ipsum dolor sit amet</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>

<h2>Lorem ipsum dolor</h2>

<ul>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>

<h2>Lorem ipsum dolor </h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis:</p>

<ul>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
<li>Lorem ipsum dolor</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id pharetra urna. Aliquam fringilla quam at dictum blandit. Sed porttitor, orci id dapibus ultrices, eros leo cursus augue, eget vestibulum felis dui eu elit. In auctor molestie quam ac dapibus. Fusce hendrerit ac sapien nec dictum. Proin rutrum dictum mauris, ut fringilla sapien tempus at. Proin lacinia sit amet sem non lobortis.</p>


</div>



`;
var contactContent =`
<div class="tittle"><h1> Contact Me</h1></div>
<div class="contact">

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada volutpat sollicitudin. Nulla vitae dolor diam. Sed scelerisque ante dolor, ut dapibus nisl semper nec. Phasellus vitae leo sed nisl pulvinar dignissim vitae eget risus. Vivamus sollicitudin sapien in odio tempor, eget vulputate libero bibendum. Pellentesque nec purus quis risus tempor sodales vitae eu nibh. Phasellus a egestas odio, quis lacinia orci. Aenean vel elit placerat, volutpat nunc sit amet, condimentum magna. Pellentesque euismod tellus scelerisque risus tempor pretium. Morbi nec ipsum interdum, efficitur sapien eu, ornare mi. Proin dictum maximus tellus, eu sodales lectus dignissim et. Proin quis risus sodales, sodales mauris sed, consequat erat. Morbi quis lectus egestas, condimentum nunc vel, semper purus. Sed tempor ac massa ut accumsan.
</p>
<p>Pellentesque euismod tellus scelerisque risus tempor pretium. Morbi nec ipsum interdum, efficitur sapien eu, ornare mi. Proin dictum maximus tellus, eu sodales lectus dignissim et. Proin quis risus sodales, sodales mauris sed, consequat erat. Morbi quis lectus egestas, condimentum nunc vel, semper purus. Sed tempor ac massa ut accumsan.
</p>

<input type="text" name="firts" placeholder="First Name" autocomplete="off" required>

    <input type="text" name="last" placeholder="Last Name" autocomplete="off" required>

    <input type="email" name="email" placeholder="Email Address" autocomplete="off" required>

    <textarea rows="5" cols="60" name="message" placeholder="Message" autocomplete="off" required></textarea>
    <button type="submit"> Send Message</button>
</div>

</div>

<div class="subscribe">

    <div class="container">
        <div class="bg-subs">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get special photos and tips for turtles. </p>
            <div class="subs-form">
              
                <input type="text" placeholder="Enter Your Email">
                <button>Subscribe</button>
            </div>
        </div>
    </div>    
</div>


`;

export function addPageContent(pageName) {
        let pageContentName = pageName + "Content";
    $("#app").html(eval(pageContentName));
}

export function setLoggedInOut(){
  
    if(loggedInOut == true) {
        loggedInOut = false;
        $("nav .log span").html("log In");
    } else{
        loggedInOut = true;
        $("nav .log span").html("log Out");
    }
}

export function getLoggedInOut () {
    return loggedInOut;
}