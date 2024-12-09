import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App01 from './App01.jsx';
import App02 from './App02.jsx';
import App03 from './App03.jsx';
import App04 from './App04.jsx';
import App05 from './App05.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App01 /> 이벤트 핸들링 */}
    {/* <App02 /> State 기초 01 */}
    {/* <App03 /> State 기초 02 */}
    {/* <App04 /> State 기초 03 - state에 이전 값을 기준으로 새 값 지정 */}
    <App05 /> State 기초 04
  </StrictMode>
);
