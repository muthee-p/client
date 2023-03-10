import { Link } from 'react-router-dom';
import {profile} from '../../assets';

function QuickNavs() {
 

  return (
    <div className='fixed w-[18%] p-4 right-0 min-h-full hidden md:block'>
      <div>
        
        
          <div className='flex justify-center mb-8'>
            <img src={profile} alt='Profile' className='w-[50%]' />
            {/*<button className='bg-amber-500 p-2 rounded-3xl' >
              Logout
            </button>*/}
          </div>
       

        
          <div className='text-right'>
            <h4 className='text-center text-xl mb-3 text-amber-500'>Quick Navigation</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/register'
                  className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'
                >
                  Citizenship Application
                </Link>
              </li>
              <li>
                <Link
                  to='/register'
                  className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'
                >
                  Voter registration
                </Link>
              </li>
             
                
                  <li>
                    <Link
                      to='/register'
                      className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'
                    >
                      Health Insurance Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/register'
                      className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'
                    >
                      Driving License Application
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/register'
                      className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'
                    >
                      Register your business
                    </Link>
                  </li>
               
              
            </ul>
          </div>
        
      </div>
    </div>
  );
}

export default QuickNavs;
