/* import { start } from 'repl';
 */import PictureFrame from './pic-frame';
/* import { relative } from 'path'; */
import CarouselCard from './carousel-card/carousel-card';
import data from '../public/card-data.json';

const dataa = data.data
console.log(dataa[0].icon);

export default function Page() {
  return (
  <>
    <div className="center">
      <div style={{alignSelf:'end', justifySelf:'center', transform:"translateY(50%)", zIndex:2}}>
        <PictureFrame />
      </div>
      <div className="distilo grid">
        <div className='place-self-end grid'>
          <h2 className='place-self-center text-2xl font-bold'>Professional experience</h2>
          <h3 className='place-self-center text-xl font-bold'>DevOps Support Engineer <a href="https://pressidium.com/" target='_blank'>@Pressidium</a></h3>
          <p className='place-self-center'>01/10/2022 – 30/10/2024</p>
          <p className='place-self-center'>What my day-to-day work for this company looked like:</p>
          <ul className="place-self-center text-center list-disc list-inside"> {/* Add "list-inside" class to fix dots not appearing at the start of each line */}
            <li>Communicating with customers via a ticketing system to provide
            support on any issues related to server maintenance or performance.</li>
            <li>LAMP Stack.</li>
            <li>Shift-based full-time work.</li>
            <li>Worldwide customer base.</li>
            <li>Communication in English.</li>
            <li>Software development (mainly bash scripts).</li>
            <li>Usage of administrative Linux commands.</li>
            <li>Log analysis.</li>
            <li>Immediate response to critical alerts regarding server health.</li>
            <li>Weekly team meetings including debriefs, case studies, realignment,
            and coordination.</li>
            <li>While working for this company, I was a decisive factor in helping the
            customer in this case study.</li>
          </ul>
          <h3 className='place-self-center text-xl font-bold'>Web Developer <a href="https://tilderist.com/en/" target='_blank'>@Tilderist</a></h3>
          <p className='place-self-center'>01/07/2022 – 31/08/2022</p>
          <ul className='place-self-center text-center list-inside list-disc'>
            <li>Full-time internship working office hours.</li>
            <li>Web development using WordPress.</li>
            <li>Plugin evaluation.</li>
            <li>HTML, CSS, JS</li>
            <li>Carrd</li>
            <li>UI/UX design.</li>
          </ul>
        </div>
        <div className='place-self-center grid'>
          <h2 className='place-self-center text-2xl font-bold'>Education and Training</h2>
          <h3 className='place-self-center text-xl font-bold'>Computer Science <a href="https://di.ionio.gr/" target='_blank'>@Ionian University</a></h3>
          <p className='place-self-center'>01/09/2018 – 09/02/2024 Corfu, Greece</p>
          <h3 className='place-self-center text-xl font-bold'>Python and Django Full Stack Web Developer Bootcamp <a href="https://www.udemy.com/certificate/UC-b70a76df-7faf-44a0-81c7-a541c9f25efc/" target='_blank'>@Udemy</a></h3>
          <p className='place-self-center'>Acquired 17/12/2022</p>
          <h3 className='place-self-center text-xl font-bold'>Responsive Web Design <a href="https://www.freecodecamp.org/certification/fcc04410a3b-11b6-4065-b5d6-b6af3517bf64/responsive-web-design" target='_blank'>@freeCodeCamp</a></h3>
          <p className='place-self-center'>Acquired 25/03/2022</p>
        </div>
      </div>
      <div className="carousel-container p-8 grid-rows-2 grid-cols-3">
        <h2 className='place-self-center text-2xl font-bold col-span-3'>Projects</h2>
        <CarouselCard 
        source={dataa[0].icon}
        title={dataa[0].title}
        description={dataa[0].description}
        url={dataa[0].url}
        style={{gridRow:'2', gridColumn:'1'}}
        />
        <CarouselCard
        source={dataa[1].icon}
        title={dataa[1].title}
        description={dataa[1].description}
        url={dataa[1].url}
        style={{gridRow:'2', gridColumn:'2'}}
        />
        <CarouselCard
        source={dataa[2].icon}
        title={dataa[2].title}
        description={dataa[2].description}
        url={dataa[2].url}
        style={{gridRow:'2', gridColumn:'3'}}
        />
      </div>
    </div>
  </>
  );
}