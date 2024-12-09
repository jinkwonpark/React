const handleEvent = (name, which) => {
  console.log(name, which);
};

const Button02 = ({ name }) => (
  <button
    onMouseEnter={() => handleEvent(name, 'MouseEnter')} // 해당 요소에 마우스 커서가 들어갈 때 이벤트 발생
    onMouseLeave={() => handleEvent(name, 'MouseLeave')} // 해당 요소에 마우스 커서가 나갈 때 이벤트 발생
    onDoubleClick={() => handleEvent(name, 'DoubleClick')} // 해당 요소를 빠르게 두 번 클릭하면 이벤트 발생
    onContextMenu={() => handleEvent(name, 'onContextMenu')} // 해당 요소에서 마우스 오른쪽 버튼을 클릭할 때 이벤트 발생
  >
    {name}
  </button>
);

export default Button02;
