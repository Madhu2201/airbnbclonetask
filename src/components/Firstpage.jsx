import React from 'react';
import "../components/page.css"
import Timechecking from './Timechecking';
const Firstpage = () => {
 return (
  <div>
   <div className='imagegrid' >
  <img className='imagegrid1' src='https://a0.muscache.com/im/pictures/miso/Hosting-938837432471516217/original/b087b7b6-8dc1-442b-b60c-3937f29e385d.jpeg?im_w=720'/>
  <img className='imagegrid1' src='https://a0.muscache.com/im/pictures/miso/Hosting-938837432471516217/original/bb583aa6-9e82-4a0a-a88a-38bd7d695b5c.jpeg?im_w=720'/>
  <img className='imagegrid1' src='https://a0.muscache.com/im/pictures/miso/Hosting-938837432471516217/original/fcef63fa-797a-47ee-8f86-e84b38ded552.jpeg?im_w=720'/>
  <img className='imagegrid1' src='https://a0.muscache.com/im/pictures/miso/Hosting-938837432471516217/original/f8e2b470-87ec-4afa-922a-b99a1c265201.jpeg?im_w=720'/>
 </div>
 <div >
<h2 className='text1'>Kodaikanal, India</h2>
<p className='text1'>2 guests1 bedroom1 bed1.5 bathrooms</p>
<h3  className='text1'>Great check-in experience</h3>
<p className='text1'>100% of recent guests gave the check-in process a 5-star rating.</p>
<h3 className='text1'>Furry friends welcome</h3>
<p className='text1'>Bring your pets along for the stay.</p>
<h3 className='text1'>Experienced host</h3>
<p className='text1'>Sree has 196 reviews for other places.</p>
<p className='text1' id='para'>Enjoy the lovely setting of this romantic spot in nature with your loved ones . This Container home is situated right inside a beautiful farm land  allowing you to take nature walk  inside the whole farm , It has a magnificent mountain view and lake view right from the balcony. Caretaker will be available during your stay, Food can be ordered in the kitchen . Come and make memories Staying in this beautiful nature home with your loved ones . (pick up drop available) or drive in -</p>
</div>
 <Timechecking/>
 </div>

);
};

export default Firstpage;