import Complication from './Complication';
import Landing from './Landing';
import Provide from './Provide';
import ShowOff from './ShowOff';
import Solution from './Solution';
import Opportunity from './Opportunity'
import Reviews from './Reviews';
import CeoSays from './CeoSays';

function Home() { 
 
  return (

    <>

    <div className='w-full flex flex-col justify-center items-center gap-45 pt-30 overflow-x-hidden'>

        <div className='w-full'>
            <Landing/>

        </div>

        <div className='w-full '>

            <Provide/>

        </div>

<div className='w-full'>

    <ShowOff/>

</div>


<div className='w-full pt-10'>

    <Complication/>


</div>


<div className='w-full '>

    <Solution/>

</div>


<div className='w-full flex justify-center items-center'>

    <Opportunity/>

</div>

<div className='w-full'>

    <Reviews/>

</div>

<div className='w-full'>

    <CeoSays/>

</div>

    </div>
    
    </>
   
  );
}

export default Home;