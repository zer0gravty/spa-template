import { useState } from "react";

function PluginsExample() {
  const [toggle, setToggle] = useState<'' | 'hidden'>('hidden');

  const handleToggle = () => setToggle((current) => current === '' ? 'hidden' : '');
  
  return (
    <div className='grid grid-cols-2 gap-y-2'>
      <div className='flex justify-center flex-col border-[5px] border-cyan-400 mx-auto px-5 py-2 prose'>
        <div className='text-5xl mb-2'>Counters based on Element Type</div>
        <h1>Web Development Languages</h1>
        <h2>HTML</h2>
        <h2>CSS</h2>
        <h3>Tailwind</h3>
        <h3>Bootstrap</h3>
        <h2>JavaScript/TypeScript</h2>
        <h3>Node</h3>
        <h4>Express</h4>
        <h4>Hono</h4>
        <h3>React</h3>
        <h4>react-remix</h4>
        <h4>NextJS</h4>
        <h4>Vanilla React</h4>
        <div className='text-5xl mb-2'>Counters based on utility class</div>
        <div className='collection'>
          <p className='item'>some guy</p>
          <p className='item'>maybe</p>
          <p className='item'>I don't know</p>
          <p className='item'>hahaha</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 border-[5px] border-emerald-200 p-3 prose'>
        <h1 className='text-5xl text-center'>Arrows Plugin</h1>
        <p className='text-xl'>Tree-View Dynamic List with CSS Arrows:</p>
        <ul>
          <li>
            <span onClick={handleToggle} className={`toggle cursor-pointer after:arrow after:arrow-${toggle === 'hidden' ? 'right' : 'down'}`}>
              JavaScript
            </span>
            <ul className={`section ${toggle}`}>
              <li>Node</li>
              <li>React</li>
              <li>
                <span className='toggle cursor-pointer after:arrow after:arrow-right'>
                  Vue
                </span>
                <ul className='section hidden'>
                  <li>Nuxt</li>
                  <li>Vuetify</li>
                  <li>
                    <span className='toggle cursor-pointer after:arrow after:arrow-right'>
                      Quasar
                    </span>
                    <ul className='section hidden'>
                      <li>Components</li>
                      <li>Composables</li>
                      <li>Directives</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PluginsExample;
