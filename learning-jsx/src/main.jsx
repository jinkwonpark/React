import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App01 from './App01.jsx';
import App02 from './App02.jsx';
import App03 from './App03.jsx';
import App04 from './App04.jsx';
import App05 from './App05.jsx';
import App06 from './App06.jsx';
import App07 from './App07.jsx';
import App08 from './App08.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App01 /> JSX 문법 기초 */}
    {/* <App02 /> 조건부 렌더링과 리스트 렌더링 */}
    {/* <App03 /> JSX 속성과 스타일링 */}
    {/* <App04 /> 컴포넌트의 props 01 */}
    {/* <App05 /> 컴포넌트의 props 02 - 스프레딩 사용 예시 */}
    {/* <App06 /> 컴포넌트의 props 03 - 함수 전달 예시 */}
    {/* <App07 /> 컴포넌트의 props 04 - children 예시 */}
    <App08 /> 컴포넌트의 props 05 - 고차 컴포넌트 예시
  </StrictMode>
);
